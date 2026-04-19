#!/usr/bin/env python3
import os
import sys
import shutil
import sitemapGen

SCRIPT_DIR   = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
DEPLOY_DIR   = os.path.join(PROJECT_ROOT, "dist")
WEBSITE_ROOT = os.path.join(PROJECT_ROOT, "src")

TARGETS = {
    "main": {
        "robots":  "robots_main.txt",
        "sitemap": "sitemap_main.xml",
        "cname": "CNAME_main"
    },
    "github": {
        "robots":  "robots_github.txt",
        "sitemap": "sitemap_github.xml",
        "cname": "CNAME_github"
    }
}

WEBSITE_ITEMS = [
    "index.html",
    "404.html",
    "bg.html",
    "about",
    "contact",
    "projects",
    "css",
    "images",
    "js"
]


def create_deployment_folder(target_name, robots_file, sitemap_file, cname_file):
    """Create a deployment folder with robots.txt, sitemap.xml, and website files."""
    target_dir = os.path.join(DEPLOY_DIR, target_name)

    if os.path.exists(target_dir):
        print(f"Removing existing {target_name} folder...")
        shutil.rmtree(target_dir)

    os.makedirs(target_dir, exist_ok=True)
    print(f"Created {target_name} folder at {target_dir}")

    with open(os.path.join(target_dir, "placeholder"), "w") as f:
        pass
    print("Created placeholder file")

    # Copy robots.txt
    robots_src = os.path.join(SCRIPT_DIR, robots_file)
    robots_dst = os.path.join(target_dir, "robots.txt")
    if os.path.exists(robots_src):
        shutil.copy2(robots_src, robots_dst)
        print(f"  Copied {robots_file} -> robots.txt")
    else:
        print(f"  WARNING: {robots_file} not found")

    # Copy sitemap.xml
    sitemap_src = os.path.join(SCRIPT_DIR, sitemap_file)
    sitemap_dst = os.path.join(target_dir, "sitemap.xml")
    if os.path.exists(sitemap_src):
        shutil.copy2(sitemap_src, sitemap_dst)
        print(f"  Copied {sitemap_file} -> sitemap.xml")
    else:
        print(f"  WARNING: {sitemap_file} not found")

    # Copy CNAME file (for GitHub Pages)
    cname_src = os.path.join(SCRIPT_DIR, cname_file)
    cname_dst = os.path.join(target_dir, "CNAME")
    if os.path.exists(cname_src):
        shutil.copy2(cname_src, cname_dst)
        print(f"  Copied {cname_file} -> CNAME")
    else:
        print(f"  WARNING: {cname_file} not found")

    # Copy website files
    for item in WEBSITE_ITEMS:
        src = os.path.join(WEBSITE_ROOT, item)
        dst = os.path.join(target_dir, item)

        if not os.path.exists(src):
            print(f"  WARNING: {item} not found in src/")
            continue

        if os.path.isdir(src):
            if os.path.exists(dst):
                shutil.rmtree(dst)
            shutil.copytree(src, dst)
            print(f"  Copied folder: {item}/")
        else:
            shutil.copy2(src, dst)
            print(f"  Copied file: {item}")

    print(f"✓ {target_name} deployment folder ready\n")

def main():
    print("Starting deployment process...\n")

    os.makedirs(DEPLOY_DIR, exist_ok=True)

    print("=== Generating sitemaps ===")
    sitemapGen.generate_all(
        src_dir    = WEBSITE_ROOT,
        output_dir = SCRIPT_DIR,
    )
    print()
    print("=== Building deployment folders ===")
    for target_name, files in TARGETS.items():
        create_deployment_folder(target_name, files["robots"], files["sitemap"], files["cname"])

    print("Deployment complete!")
    print(f"Deployment folders created in: {DEPLOY_DIR}")


if __name__ == "__main__":
    main()