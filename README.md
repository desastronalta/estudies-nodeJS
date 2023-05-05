# estudies-nodeJS

Node js

o node é um ambiente que permite a execução de código javascript fora de um navegador. qual utiliza a engine V8 do google qual transforma o codigo de java script em codigo de maquina sendo utilizado para construir APIs(back-ends).

COMO ELE FUNCIONA INTERNAMENTE
possui um nucleo (sendo single threaded) porem suporta várias operações simultâneas(non-blocking) onde ele envia uma requisição de cada vez dos programas front end para a engine processar e enquanto oum esta sendo procssado ele vai ver outra requisição assim levando ela para a engine e entregando a requição que ja esta processada para o programa que requisitou.

VANTAGENS DO NODE JS

por ele ter apenas um nucleo ele tem um otimo uso de memoria
possui muita harmonia com o front end devido a ambos utilizarem javaScript
sendo muito rapido simples e escalavel
tendo uma presença extremamente forte no mercado.

MODULOS NO NODE JS

é possivel criar seus proprios módulos(nossos arquivos) e importalos.
ele tambem vem com um modulo ja pre instalado (path, fs,http etc).
para importar modulos, utiliza-se CommonJS:
const path = require('path');
const meuArquivo = require ('./meu-arquivo.js');

NPM (NODE PACKAGE MENAGER)

é possivel instalar modulos de terceiros e utilizalos em nossa aplicação
esses módulos são armazenados em uma pasta chamada node_modules
um arquivo chamado"pacjkade.json" lista todos os modulos instalados pelo npm.

algums comando importantes são:
npm init // Cria o package.json
npm install express // instala um pacote localmente
npm -g install nodemon // instala um pacota globalmtete

NODEMON

ele é muito utilizado para reiniciar o servidor automatimacamente.

MODULOS NATIVOS
PATH
esse modulo é utilizado parainteração de arquivos podendo utilizar de alguns comandos para que se faça uso usando o nome dado ao objeto e suas funções.
FS
utilizado para manipular e criar arquivos que atraves da instancia de um objeto dentro do aquivo que sera lido

CRIANDO UM SERVIDOR BACKEND EM NODEJS (com modulo http)

sendo utilizado principalmente para criar servers podendo ser passado alguns parametros para entrar em uma url especifica ou algo do tipo geralmente o node envia arquivos do tipo json assim, fazendo a comunicação entre o front end e o back end.

CRIANDO UM SERVER ATRAVÉS DO EXPRESS
    o express é muito mais simples e rapido de criar um servidor pois é uma bibliotace especializada nesse quesito sendo necessário criar duas constantes uma sendo a porta utilizada pelo servidor e a outra a requisição da biblioteca 

CRIANDO UM BANCO DE DADOS COM MONGODB
    