const http = require("http");
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home page!</h1>");
  }
  if (req.url === "/users") {
    const users = [
      {
        name: "rafael dantas",
        email: "rafael@dodle",
      },
      {
        name: "natalia vieira",
        email: "natalai@dodle",
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
    
  }
});

server.listen(port, () => console.log(`rodando na porta: ${port}`));
