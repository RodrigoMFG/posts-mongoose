const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Category')
const Category = mongoose.model("categories");

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

    router.post('/categories/new', (req,res) => {
        const newCategory ={
            nome: req.body.name,
            slug: req.body.slug
        }

        new Category(newCategory).save().then(() => {
            console.log("Saved Successfully!");
        }).catch((error) => {
            console.log("Error while saving: " + error);
        });

    })

module.exports = router