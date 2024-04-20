//Conexão com o banco de dados
const Sequelize=require("sequelize")
const sequelize=new Sequelize("teste","root","",{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(err){
    console.log(`Falha ao conectar: ${err}`)
})

//Criação de tabelas no banco de dados

const Postagem=sequelize.define("postagem", {
    titulo:{
        type: Sequelize.STRING //Definindo o tipo do titulo
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

// Postagem.create({
//     titulo: "Esse e o titulo",
//     conteudo: "Esse e o conteudo aksdkaskadkskdaskdaskdakdaskd"
// })

// Postagem.sync({force: true})

const User=sequelize.define("ususarios", {
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})

User.create({
    nome:"Jonsons",
    sobrenome:"Jobitreison",
    idade: 45,
    email:"JonsJobi@email.com"
})

// User.sync({force: true})