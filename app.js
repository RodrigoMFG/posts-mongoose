// Carregando módulos
    const express = require('express');
    const handlebars = require('express-handlebars');
    const bodyParser = require('body-parser');
    const app = express();
    const admin = require("./routes/admin")
    const path = require('path')
    const mongoose = require('mongoose');
    const session = require('express-session');
    const flash = require('connect-flash');

//Configurações
    //Session
        app.use(session({
            secret: "123456",
            ressave: true,
            saveUninitialized: true
        }))
        app.use(flash())

    //MIDLDLEWARE
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash("success_msg");
            res.locals.error_msg = req.flash("error_msg");
            next();
        })
    //Body Parser
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(bodyParser.json());
    //Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine' , 'handlebars');
    //Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost/blogapp").then(()=> {
            console.log("Connected to Mongo");
        }).catch((error) => {
            console.log("Erro ao se conectar> " + error);
        })
    
    //Public
        app.use(express.static(path.join(__dirname,"public")))

        app.use((req, res, next) => {
            console.log("MIDDLEWARE!!")
            next();
        })

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