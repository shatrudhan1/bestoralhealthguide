#!/usr/bin/env node

import fs from "fs";

const urls = [
  "/",
  "/about-author",
  "/editorial-policy",
  "/medical-disclaimer",
  "/privacy-policy",
  "/contact",
  "/resources",
  "/symptoms",
  "/comparisons",
  "/best-products"
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>https://bestoralhealthguide.com${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);

console.log("✅ Sitemap Generated Successfully");
