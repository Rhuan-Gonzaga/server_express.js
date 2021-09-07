//Importando express.js
const express = require("express");
var url = require('url');
const server = express();

//Recebe a minha requisição do tipo post 
server.post("/finalizado", (req, res) => {
    res.send("<h1>Você enviou seus dados</h1>");
})

//Envia o meu arquivo contato.html
server.get("/contato", (req, res) => {
    var ende = url.parse(req.url).pathname;
    res.sendFile(__dirname + ende + ".html");
})

//Inicia na pag principal
server.get("/index", (req, res) => {
    res.send("<h1>Você está na pagina principal</h1>");

})

server.get("/", (req, res) => {
    res.send("<h1>Você está na pagina principal</h1>");

})

//Se meu diretorio for diferente de "/","/index" ou "/contato", me envie a mensagem "pagina não encontrada" 
server.get('*', (req, res) => {
    res.send('404 PAGE NOT FOUND!!');
});

//Iniciando meu servidor na porta 8000
server.listen(8000, (error) => {
    if (error) {
        console.log("Houve um erro " + error);
    }

    console.log("Você está na porta 8000");
})