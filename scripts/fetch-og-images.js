#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const urls = [
  { url: "https://dagim-abraham-todo-list.netlify.app/", file: "app-1.jpg" },
  { url: "https://dagimabraham-react-api.netlify.app/", file: "product-1.jpg" },
  { url: "https://dagim-abraham-nextjs.netlify.app/", file: "app-2.jpg" },
  {
    url: "https://dagimabraham-react-netfliks-clone.netlify.app/",
    file: "product-2.jpg",
  },
  { url: "https://dagimabraham-ezycart.netlify.app/", file: "product-3.jpg" },
];

const outDir = path.join(
  __dirname,
  "..",
  "public",
  "assets",
  "img",
  "portfolio",
);
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function fetchUrl(u) {
  try {
    const res = await fetch(u.url, { redirect: "follow" });
    if (!res.ok) {
      console.error(`Failed to fetch ${u.url}: ${res.status}`);
      return;
    }
    const html = await res.text();
    // try og:image
    let m = html.match(
      /<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["']/i,
    );
    if (!m) {
      m = html.match(
        /<meta[^>]+name=["']twitter:image["'][^>]*content=["']([^"']+)["']/i,
      );
    }
    let imgUrl = m && m[1];
    if (!imgUrl) {
      // Fallback: find first <img src="..."> in the HTML
      const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["']/i);
      if (imgMatch && imgMatch[1]) {
        imgUrl = imgMatch[1];
        console.log(`Fallback image found for ${u.url}: ${imgUrl}`);
      } else {
        console.log(`No og/twitter image or <img> found for ${u.url}`);
        return;
      }
    }
    // Resolve relative URLs against page URL
    try {
      imgUrl = new URL(imgUrl, u.url).href;
    } catch (err) {
      console.error(`Failed to parse URL from ${imgUrl}:`, err.message || err);
      return;
    }
    console.log(`Downloading ${imgUrl} -> ${u.file}`);
    const imgRes = await fetch(imgUrl);
    if (!imgRes.ok) {
      console.error(`Failed to download image ${imgUrl}: ${imgRes.status}`);
      return;
    }
    const dest = path.join(outDir, u.file);
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    fs.writeFileSync(dest, buffer);
    console.log(`Saved ${dest}`);
  } catch (err) {
    console.error(`Error fetching ${u.url}:`, err.message || err);
  }
}

(async () => {
  if (typeof fetch !== "function") {
    console.error("Node fetch not available. Requires Node 18+.");
    process.exit(1);
  }
  for (const u of urls) {
    // eslint-disable-next-line no-await-in-loop
    const ok = await fetchUrl(u);
    if (!ok) {
      // fallback: download a representative Unsplash image based on filename
      const queries = {
        "app-1.jpg": "mobile-app,ui",
        "product-1.jpg": "react,web-app",
        "app-2.jpg": "ecommerce,product-page",
        "product-2.jpg": "netflix,streaming,ui",
        "product-3.jpg": "ecommerce,shopping,product",
      };
      const q = queries[u.file] || "product,app";
      const imgUrl = `https://source.unsplash.com/1200x800/?${encodeURIComponent(q)}`;
      try {
        console.log(`Downloading representative image ${imgUrl} -> ${u.file}`);
        const res = await fetch(imgUrl);
        if (res.ok) {
          const buffer = Buffer.from(await res.arrayBuffer());
          fs.writeFileSync(path.join(outDir, u.file), buffer);
          console.log(`Saved representative image -> ${u.file}`);
        } else {
          console.error(
            `Failed to download representative image ${imgUrl}: ${res.status}`,
          );
        }
      } catch (err) {
        console.error(
          `Error downloading representative image: ${err.message || err}`,
        );
      }
    }
  }
})();
