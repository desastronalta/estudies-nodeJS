const { error } = require("console");
const Fs = require("fs");
const path = require("path");

// Criar uma pasta
// Fs.mkdir(path.join(__dirname, "/teste"), (error) => {
//   if (error) {
//     return console.log("Erro: ", error);
//   }
//   console.log("pasta criada com sucesso!");
// });

// criar um arquivo utilizando fs
// Fs.writeFile(
//   path.join(__dirname, "/teste", "teste.txt"),
//   "Hello node!!",
//   (error) => {
//     if (error) {
//       return console.log("Erro: ", error);
//     }
//     console.log("arquivo criado com sucesso!!");
//   }
// );

//adicionar a um arquivo
// Fs.appendFile(
//   path.join(__dirname, "/teste", "teste.txt"),
//   "hello world!!",
//   (error) => {
//     if (error) {
//       return console.log("erro: ", error);
//     }
//     console.log("arquivo alterado com sucesso!");
//   }
// );

Fs.readFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      return console.log("erro: ", error);
    }
    console.log(data);
  }
);
