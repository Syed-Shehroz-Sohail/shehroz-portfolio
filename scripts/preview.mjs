import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";

const root = resolve("out");
const base = "/shehroz-portfolio";
const port = Number(process.env.PORT || 3000);
const mime = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".png": "image/png", ".txt": "text/plain" };

try { await stat(resolve(root, "index.html")); } catch { console.error("Build first: npm run build"); process.exit(1); }

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", "http://localhost");
    if (url.pathname === "/" || url.pathname === base) {
      response.writeHead(302, { Location: `${base}/` }); response.end(); return;
    }
    if (!url.pathname.startsWith(`${base}/`)) throw new Error("Not found");
    const relative = decodeURIComponent(url.pathname.slice(base.length));
    let file = resolve(root, `.${relative}`);
    if (!file.startsWith(`${root}${sep}`) && file !== root) throw new Error("Invalid path");
    const info = await stat(file);
    if (info.isDirectory()) file = resolve(file, "index.html");
    const bytes = await readFile(file);
    response.writeHead(200, { "Content-Type": mime[extname(file)] || "application/octet-stream", "Cache-Control": "no-store" });
    response.end(request.method === "HEAD" ? undefined : bytes);
  } catch {
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(await readFile(resolve(root, "404.html")));
  }
});
server.on("error", error => {
  console.error(`Could not start preview on port ${port}: ${error.message}`);
  console.error("If the port is occupied, use PORT=3001 npm run preview.");
  process.exit(1);
});
server.listen(port, "127.0.0.1", () => console.log(`Local production preview: http://localhost:${port}${base}/`));
