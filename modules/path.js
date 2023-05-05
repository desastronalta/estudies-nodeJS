const path = require("path");
//basename (mostra o nome do arquivo atual).
console.log(path.basename(__filename));

//dirname nome do diretorio atual.
console.log(path.dirname(__filename));

// exname = extensao do arquivo
console.log(path.extname(__filename));

// criar um objeto path em json
console.log(path.parse(__filename));

// .join junto caminhos de arquivos.
console.log(path.join(__dirname, "teste"));
