const express = require('express');
const router = express.Router();

//Rotas
    router.get('/', (req, res) =>{
        res.render("admin/index");
    })

    router.get('/posts', (req,res) => {
        res.send("Posts Section");
    })

    router.get('/categories', (req,res) => {
        res.render("admin/categories")
    })

    router.get('/categories/add', (req,res) => {
        res.render("admin/addcategories")
    })

module.exports = router