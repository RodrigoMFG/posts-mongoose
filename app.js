// Carregando módulos
    const express = require('express');
    const handlebars = require('express-handlebars');
    const bodyParser = require('body-parser');
    const app = express();
    const admin = require("./routes/admin")
    //const mongoose = require('mongoose');

//Configurações
    //Body Parser
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(bodyParser.json());
    //Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine' , 'handlebars');

//Rotas
    app.get('/', (req,res) => {
        res.send('Main Page');
    })

    app.get('/posts', (req,res)=> {
        res.send("Posts List");
    })

    app.use('/admin', admin);

//Outros
const PORT = 8081;
app.listen(PORT, () => {
    console.log("Server Running on port: " + PORT);
})