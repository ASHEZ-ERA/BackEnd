import http from "node:http";
import path from "node:path";
const PORT = 8000;

const __dirname = import.meta.dirname;
const server = http.createServer((req, res) => {
  const absPathResource = path.join(__dirname, "public", "index.html");
  console.log("absolute", absPathResource);
  const relPathResource = path.join( "public", "index.html");
  console.log("relative",relPathResource);
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.end("<h1>Hello World</h1>");
});
server.listen(PORT, () => console.log(`server is running at: ${PORT}`));
