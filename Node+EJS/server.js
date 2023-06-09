const express = require('express');
const app = express();

app.set("view engine","ejs");

app.get("/", function(req, res){
    const items = [
        {
            title:"D",
            message: "esenvolvedor"
    },
    {
        title: "E",
        message: "JS usa JavaScript para renderizar HTML"
    },
    {
        title: "M",
        message: "uito Fácil de usar"
    },
    {
        title: "A",
        message: "AAAA"
    },

    {
        title: "I",
        message: "IIIII"
    }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"
    res.render("pages/index",{
        qualitys: items,
        subtitle: subtitle
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando");