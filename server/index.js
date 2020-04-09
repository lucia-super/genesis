var http = require('http');

http.createServer(function (request, response) {
    const { url } = request
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    var allowHeaders = "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With, Authorization";
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", allowHeaders);
    response.writeHead(200, { 'Content-Type': 'application/json;charset=UTF-8' });
    const mockData = {
        result: [
            { key: "template1", value: "1" },
            { key: "template2", value: "2" },
            { key: "template3", value: "4" }],
        pagination: {
            size: 10,
            page: 1,
            amount: 3,
            totalPages: 1
        }
    }
    switch (url) {
        case "/school/list":
            response.write(JSON.stringify(mockData));
            break
        case "/school/detail":
            response.write(JSON.stringify({
                name: "templagte 1 detail"
            }));
            break
        case "/students/list":
            response.write(JSON.stringify(mockData));
            break
        case "/students/detail":
            response.write(JSON.stringify({
                name: "hello"
            }));
            break
        case "/close":
            response.addHeader("Access-Control-Allow-Headers", true);
            break
        default:
            response.write(JSON.stringify({ not: "not found" }));
    }
    response.end()
}).listen(8893);
