const express=require("express");
const exphbs=require("express-handlebars")
const Sequelize=require("sequelize");

const app=express()
const port=8081


// Config
    // Tamplate engine
    app.engine('handlebars', exphbs({defaultLayout: "main"}));
    app.set('view engine', 'handlebars');
    // app.set('views', './views/layouts');

//Conexão com o banco de dados mysql
    const sequelize=new Sequelize("teste","root","",{
        host:"localhost",
        dialect:"mysql"
    })

    sequelize.authenticate().then(function(){
        console.log("Conectado com sucesso!")
    }).catch(function(err){
        console.log(`Falha ao conectar: ${err}`)
    })

//Criando rotas
app.get("/", function(req,res){
    res.render('formulario')
})


app.listen(port, function(){
    console.log(`Servidor rodando na url http://localhost:${port}`)
})
