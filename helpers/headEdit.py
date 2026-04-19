#!/usr/bin/env python3
import os
import re
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROOT_DIR = os.path.join(BASE, "src")
HEAD_SOURCE = os.path.join(BASE, "helpers", "head.txt")
START = "<!-- GLOBAL_HEAD_START -->"
END   = "<!-- GLOBAL_HEAD_END -->"


def indent_block(text: str, indent: str = "\t") -> str:
    return "\n".join(indent + line if line.strip() else line for line in text.splitlines())

def load_head(path):
    if not os.path.exists(path):
        print(f"[ERROR] Head file not found: {path}")
        sys.exit(1)
    with open(path, "r", encoding="utf-8") as f:
        return f.read().strip()
    
def find_html_files(root):
    html_files = []
    for dirpath, _, filenames in os.walk(root):
        for filename in filenames:
            if filename.lower().endswith(".html"):
                html_files.append(os.path.join(dirpath, filename))
    return html_files

def replace_head_block(content, new_head):
    pattern = re.compile(
        rf"{re.escape(START)}.*?{re.escape(END)}",
        re.DOTALL
    )
    replacement = f"{START}\n{indent_block(new_head)}\n\t{END}"
    if pattern.search(content):
        new_content, count = pattern.subn(replacement, content)
        return new_content, True
    return content, False

def main():
    root = os.path.abspath(ROOT_DIR)
    if not os.path.isdir(root):
        print(f"[ERROR] Directory not found: {root}")
        sys.exit(1)
    new_head = load_head(HEAD_SOURCE)
    html_files = find_html_files(root)
    if not html_files:
        print(f"[INFO] No HTML files found in: {root}")
        return
    updated, skipped_no_head, errors = 0, 0, 0
    for filepath in sorted(html_files):
        rel_path = os.path.relpath(filepath, root)
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                original = f.read()
            new_content, replaced = replace_head_block(original, new_head)
            if not replaced:
                print(f"[SKIP] No markers found: {rel_path}")
                skipped_no_head += 1
                continue
            if new_content == original:
                print(f"[SKIP] No changes: {rel_path}")
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
    print(f"Done. Updated: {updated} | No markers: {skipped_no_head} | Errors: {errors}")


if __name__ == "__main__":
    main()