import os
import glob
from datetime import datetime, UTC
from xml.etree.ElementTree import Element, SubElement, ElementTree, indent

DEPTH_PENALTY = 0.1
MIN_PRIORITY  = 0.1

BASE_URLS = {
    "github": "https://fireroth.is-a.dev/",
    "main":   "https://www.fireroth.com/",
}

BLACKLIST_RELATIVE = [
    os.path.join("projects", "side-projects"),
    "bg.html",
    "404.html",
]


def get_lastmod(path: str) -> str:
    ts = os.path.getmtime(path)
    dt = datetime.fromtimestamp(ts, UTC)
    return dt.strftime("%Y-%m-%d")

def depth_priority(html_path: str, root_dir: str) -> str:
    rel   = os.path.relpath(html_path, root_dir)
    parts = rel.replace("\\", "/").split("/")
    depth = len(parts) - 1
    prio  = round(max(MIN_PRIORITY, 1.0 - depth * DEPTH_PENALTY), 1)
    return f"{prio:.1f}"

def collect_html_files(root: str, blacklist_relative: list) -> list:
    blacklist_norm = [os.path.normpath(os.path.join(root, p)) for p in blacklist_relative]

    def is_blacklisted(path: str) -> bool:
        norm = os.path.normpath(path)
        for entry in blacklist_norm:
            if norm == entry or norm.startswith(entry + os.sep):
                return True
        return False

    found = []
    for path in glob.glob(os.path.join(root, "**", "*.html"), recursive=True):
        if not is_blacklisted(path):
            found.append(os.path.normpath(path))
    found.sort()
    return found

def to_url(html_path: str, root_dir: str, base_url: str) -> str:
    rel = os.path.relpath(html_path, root_dir).replace("\\", "/")
    if rel == "index.html":
        rel = ""
    elif rel.endswith("/index.html"):
        rel = rel[:-len("index.html")]
    return base_url.rstrip("/") + "/" + rel

def generate_sitemap(html_files: list, base_url: str, root_dir: str) -> ElementTree:
    today  = datetime.now(UTC).strftime("%Y-%m-%d")
    urlset = Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

    for html_path in html_files:
        url_el          = SubElement(urlset, "url")
        loc             = SubElement(url_el, "loc")
        loc.text        = to_url(html_path, root_dir, base_url)
        lastmod         = SubElement(url_el, "lastmod")
        lastmod.text    = get_lastmod(html_path)
        changefreq      = SubElement(url_el, "changefreq")
        changefreq.text = "monthly"
        priority        = SubElement(url_el, "priority")
        priority.text   = depth_priority(html_path, root_dir)

    indent(urlset, space="  ")
    return ElementTree(urlset)

def write_sitemap(tree: ElementTree, output_path: str) -> None:
    with open(output_path, "wb") as fh:
        fh.write(b'<?xml version="1.0" encoding="UTF-8"?>\n')
        tree.write(fh, encoding="utf-8", xml_declaration=False)

def generate_all(src_dir: str, output_dir: str) -> None:
    """Generate all sitemaps and write them to output_dir."""
    print(f"Scanning  : {src_dir}")
    html_files = collect_html_files(src_dir, BLACKLIST_RELATIVE)
    print(f"Found     : {len(html_files)} HTML file(s) (after blacklist)")

    for name, base_url in BASE_URLS.items():
        print(f"  Generating sitemap for: {base_url}")
        tree        = generate_sitemap(html_files, base_url, src_dir)
        output_file = os.path.join(output_dir, f"sitemap_{name}.xml")
        write_sitemap(tree, output_file)
        print(f"  Saved to  : {output_file}")


if __name__ == "__main__":
    SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
    PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
    generate_all(
        src_dir    = os.path.join(PROJECT_ROOT, "src"),
        output_dir = os.path.join(PROJECT_ROOT, "deploy"),
    )