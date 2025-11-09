const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

// config
    // template engine
app.engine('handlebars',handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
// Conexão com o banco de dados MySql
const sequelize = new Sequelize('sistemadecadastro','root','1234',{
    host: "localhost",
    dialect: "mysql"
});
// Rotas

    app.get('/cad',function(req,res){
        res.send('ROTA DE CADASTRO DE POSTS')
    })
app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});