import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { stringify } from "node:querystring";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 8000;
const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end();
    return;
  }

  //constructs a filsystem by combining __dirname(directory where the current script is located) and requested url


  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
//extracts and standardises the file extension from a given file
  const extName = String(path.extname(filePath).toLowerCase())

  //Multipurpose internet mail extensions(tells browsers what types of data a file contains)
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".png": "image/png",
  };
// looks up for mime type from predefined mimeTypes
  const contentType = mimeTypes[extName] || "application/octet-stream"
// read from a file from filepath and send i to an HTTP response
  fs.readFile(filePath,(err, content)=>{
      if(err){
          if(err.code === "ENOENT")
          {
              res.writeHead(404, {"Content-Type": contentType})
              res.end("404: page not found")
          }
          else{
            res.writeHead(200, {"Content-Type": contentType})
            res.end(content, "utf-8")
          }
      }
  })
});


server.listen(PORT, () => {
  console.log(`server is live at: ${PORT}`);
});

/**
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
 */
