const express = require("express");
const app = express();

const port = 8080;
//fazendo uma requisição get
app.get("/home", (req, res) => {
  res.status(200).send("<h1> Hello wolrd!! </h1>");
});
app.listen(port, () => {
  console.log(`rodando com express! na porta ${port}!`);
});

app.get("/users", (req, res) => {
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
  res.status(200).json(users);
});
