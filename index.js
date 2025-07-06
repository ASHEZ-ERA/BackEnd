import http from "node:http";
import db from "./database/db";

const PORT = 8000;
const server = http.createServer(async (req, res) => {
  const destinations = await db();
  if (res.method === "GET" && res.url === "/api") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(destinations));
  } else if (res.url.startsWith("/api/continent") && res.method === "GET") {
    const continent = res.url.split("/").pop();
    const filteredData = destinations.filter((data) => {
      return data.continent.toLowerCase() === continent.toLowerCase();
    });

    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(filteredData));
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        error: "not found",
        message: "The requested route doesnot exist",
      })
    );
  }
});

server.listen(PORT, () => console.log(`server runing on port: ${PORT}`));
