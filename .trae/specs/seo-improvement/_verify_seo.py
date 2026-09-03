#!/usr/bin/env python3
import http.server
import socketserver
import threading
import urllib.request
import time
import os
import re
import xml.etree.ElementTree as ET

PORT = 8767
ROOT = "/Users/ragesh/Documents/Entire Projects/Math Reality"
os.chdir(ROOT)
Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("127.0.0.1", PORT), Handler)
thread = threading.Thread(target=httpd.serve_forever, daemon=True)
thread.start()
time.sleep(1.2)
base = f"http://127.0.0.1:{PORT}"


def fetch(path):
    with urllib.request.urlopen(base + path) as r:
        return r.status, r.headers.get("content-type", ""), r.read().decode("utf-8", "replace")


def report(title, val):
    print(f"## {title}\n{val}\n")


try:
    s, ct, robots = fetch("/robots.txt")
    report("robots.txt", f"status={s} ct={ct}\n{robots}")
    assert s == 200
    assert "Allow: /" in robots
    assert "Sitemap:" in robots

    s, ct, sm = fetch("/sitemap.xml")
    report("sitemap.xml", f"status={s} ct={ct} bytes={len(sm)}")
    assert s == 200
    root = ET.fromstring(sm)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = root.findall("sm:url", ns)
    print(f"sitemap <url> count: {len(urls)}")
    for u in urls:
        loc = u.findtext("sm:loc", default="", namespaces=ns)
        pri = u.findtext("sm:priority", default="", namespaces=ns)
        print(f"  {loc}  priority={pri}")
    print()

    s, ct, html = fetch("/index.html")
    report("index.html summary", f"status={s} ct={ct} bytes={len(html)}")
    assert s == 200

    def first(p, text):
        m = re.search(p, text, re.S | re.I)
        return m.group(1) if m else None

    title = first(r"<title>(.*?)</title>", html)
    robots_meta = first(r'<meta\s+name="robots"\s+content="(.*?)"', html)
    desc = first(r'<meta\s+name="description"\s+content="(.*?)"', html)
    canonical = first(r'<link\s+rel="canonical"\s+href="(.*?)"', html)
    twitter_card = first(r'<meta\s+name="twitter:card"\s+content="(.*?)"', html)
    og_type = first(r'<meta\s+property="og:type"\s+content="(.*?)"', html)
    jsonld_static = len(re.findall(r'<script\s+type\s*=\s*"application/ld\+json"', html))
    print("static <title> len =", len(title) if title else None)
    print("  title =", repr(title))
    print("static meta description len =", len(desc) if desc else None)
    print("  description =", repr(desc))
    print("robots meta =", robots_meta)
    print("canonical =", canonical)
    print("twitter:card =", twitter_card)
    print("og:type =", og_type)
    print("# static ld+json blocks in source =", jsonld_static)
    print()

    # Static HTML heading counts (carousel H2 added; and other section H2s that exist in static HTML)
    h1 = re.findall(r"<h1\b", html, re.I)
    h2 = re.findall(r"<h2\b", html, re.I)
    h3 = re.findall(r"<h3\b", html, re.I)
    print("static HTML <h1> tags:", len(h1))
    print("static HTML <h2> tags:", len(h2))
    print("static HTML <h3> tags:", len(h3))
    assert len(h1) == 1

    # Verify no "Geteway" typo remains, nav+mobile menu use label "Projects" for href="#projects" that appear inside navigation contexts (<ul> in nav-wrap/mobile-menu or footer-col Explore/More)
    assert "Geteway" not in html
    # Navigation list links: desktop + mobile + footer MUST be exactly "Projects"
    # (the "Applied Mathematics Projects" in About lead-text is a body link, which is allowed to vary)
    nav_and_mobile_footer = re.findall(r"(?:nav-links|mobile-menu|footer-col)[\s\S]*?<li>.*?<a[^>]*href=\"#projects\"[^>]*>([^<]+)</a>", html, re.I)
    nav_projects_labels = [t.strip() for t in nav_and_mobile_footer if t.strip()]
    print("nav/mobile/footer list links to #projects labels =", nav_projects_labels)
    assert nav_projects_labels, "expected navigation list links to #projects"
    assert all(t == "Projects" for t in nav_projects_labels), f"some nav list labels were not exactly 'Projects': {nav_projects_labels!r}"

    print("\nALL CHECKS PASSED")
finally:
    httpd.shutdown()
    httpd.server_close()
