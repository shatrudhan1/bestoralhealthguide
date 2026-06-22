#!/usr/bin/env node

import fs from "fs";

const appContent = fs.readFileSync("src/App.jsx", "utf8");

const routeRegex = /path="([^"]+)"/g;
const routes = [];

let match;

while ((match = routeRegex.exec(appContent)) !== null) {
  const path = match[1];

  if (
    !path.includes("*") &&
    !path.includes(":")
  ) {
    routes.push(path);
  }
}

const uniqueRoutes = [...new Set(routes)];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">

${uniqueRoutes
  .map(
    (url) => `
<url>
  <loc>https://bestoralhealthguide.com${url}</loc>
</url>`
  )
  .join("")}

</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);

console.log(
  `✅ Sitemap Generated with ${uniqueRoutes.length} URLs`
);
