import { http } from "node:http";
import db from "./database/db";
import SendJSONresponse from "./utils/SendJSONresponse";
import getDataByPathParams from "./utils/getDataByPathParams";

const PORT = 8000;
const server = http.createServer(async (req, res) => {
  const destinations = await db();

  if (req.method === "GET" && req.url === "/api") {
    SendJSONresponse(res, 200, destinations);
  } else if (req.method === "GET" && req.url.startsWith("/api/continent")) {
    getDataByPathParams(destinations, "continent", continent);
    SendJSONresponse(res, 200, filteredData);
  } else if (req.method === "GET" && req.url.startsWith("api/country")) {
    getDataByPathParams(destinations, "Country", country )
    SendJSONresponse(res, 200, filteredData);
  } else {
    SendJSONresponse(res, 404, {
      error: "not found",
      message: "the content you are looking for doesnot exist",
    });
  }
});
server.listen(PORT, ()=> console.log(`the server is running at: ${PORT}`))

/**
 * import http from "node:http"
import db from "./database/db"
import { error } from "node:console"
const PORT = 8000
const server = http.createServer(async(req, res)=> {
  const destinations = await db()
  if(req.url === "/api" && req.method === "GET"){
    res.setHeader("Content-Type", "application/json")
    res.statusCode = 200
    res.end(JSON.stringify(destinations))
  }
  else if(req.url.startsWith("api/continent") && req.method === "GET"){
    const continent = res.url.split("/").pop()
    res.setHeader("Content-Type", "application/json")
    res.statusCode = 200
    res.end(JSON.stringify(destinations.filter((desti) => {
      return desti.continent.toLowerCase() === continent.toLowerCase()
    })))
  }
  else{
    res.setHeader("Content-Type", "application/json")
    res.statusCode = 404
    res.end(JSON.stringify({
      error: "not found",
      message: "the page you are looking for does not exist"
    }))
  }
})

server.listen(PORT,() => console.log(`the server is running on: ${PORT}`))


 */

/**import http from "node:http";
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
 */
