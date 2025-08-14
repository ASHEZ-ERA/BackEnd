import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const server = http.createServer((req, res) => {
  if(req.url === 'favicon.ico'){
    res.writeHead(204)
    return res.end()
  }
  
    const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );

  const extName = String(path.extname(filePath).toLowerCase());

  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "text/png",
  };

  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if(err.code === 'ENOENT'){
        res.writeHead(404,{"content-type": contentType})
        res.end("404: FIle not found")
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(PORT, () => console.log(`Server is listening on: ${PORT}`));
