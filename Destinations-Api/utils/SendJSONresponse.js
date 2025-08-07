export default function SendJSONresponse(res, statusCode, data){
    res.setHeader("Content-Type", "application/json")
    res.setHeader("Allow-Control-Allow-Origin", "*")
    res.setHeader("Allow-Control-Allow-Method", "GET");
    res.statusCode === statusCode
    res.end(JSON.stringify(data))
}

/** CORS: Cross Origin Resource Sharing */