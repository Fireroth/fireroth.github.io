#!/usr/bin/env python3

import os
import re
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROOT_DIR = BASE
FOOTER_SOURCE = os.path.join(BASE, "helpers", "footer.txt")
BLACKLIST = [
    os.path.join(BASE, "projects", "side-projects", "color", "index.html"),
    os.path.join(BASE, "projects", "side-projects", "live.edit", "index.html"),
    os.path.join(BASE, "projects", "side-projects", "text.spammer", "index.html"),
    os.path.join(BASE, "projects", "webGLCube", "index.html"),
    os.path.join(BASE, "bg.html"),
]


def load_footer(path):
    if not os.path.exists(path):
        print(f"[ERROR] Footer file not found: {path}")
        sys.exit(1)
    with open(path, "r", encoding="utf-8") as f:
        return f.read()
 
def find_html_files(root):
    html_files = []
    for dirpath, _, filenames in os.walk(root):
        for filename in filenames:
            if filename.lower().endswith(".html"):
                html_files.append(os.path.join(dirpath, filename))
    return html_files
 
def is_blacklisted(filepath, blacklist):
    normalized = os.path.normpath(os.path.abspath(filepath))
    for entry in blacklist:
        if os.path.normpath(os.path.abspath(entry)) == normalized:
            return True
        if os.path.basename(entry) == os.path.basename(filepath) and os.sep not in entry:
            return True
    return False
 
def replace_footer(content, new_footer):
    pattern = re.compile(r'<footer\b[^>]*>.*?</footer>', re.DOTALL | re.IGNORECASE)
    wrapped = f'<footer class="footer">\n{new_footer}\n\t</footer>'
    new_content, count = pattern.subn(wrapped, content)
    return new_content, count > 0
 
def main():
    root = os.path.abspath(ROOT_DIR)
    if not os.path.isdir(root):
        print(f"[ERROR] Directory not found: {root}")
        sys.exit(1)
 
    new_footer = load_footer(FOOTER_SOURCE)
    html_files = find_html_files(root)
 
    if not html_files:
        print(f"[INFO] No HTML files found in: {root}")
        return
 
    updated, skipped_blacklist, skipped_no_footer, errors = 0, 0, 0, 0
 
    for filepath in sorted(html_files):
        rel_path = os.path.relpath(filepath, root)
 
        if is_blacklisted(filepath, BLACKLIST):
            print(f"[SKIP] Blacklisted: {rel_path}")
            skipped_blacklist += 1
            continue
 
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                original = f.read()
 
            new_content, replaced = replace_footer(original, new_footer)
 
            if not replaced:
                print(f"[SKIP] No <footer> found: {rel_path}")
                skipped_no_footer += 1
                continue
 
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
 
            print(f"[OK]   Updated: {rel_path}")
            updated += 1
 
        except Exception as e:
            print(f"[ERROR] Failed to process {rel_path}: {e}")
            errors += 1
 
    print()
    print("=" * 40)
    print(f"Done. Updated: {updated} | Blacklisted: {skipped_blacklist} | "
          f"No footer: {skipped_no_footer} | Errors: {errors}")
 
if __name__ == "__main__":
    main()
