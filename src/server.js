//importar dependencia
const express = require('express');
const path = require('path')
const pages = require('./pages.js')

//iniciando o express biblioteca
const server = express();
server
    //utilizar body do req
    .use(express.urlencoded({extended:true}))
    //utilizando os arquivos estaticos
    .use(express.static('public'))

    //configurar templaate engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //rotas da aplicaco
    .get('/', pages.index)
    .get('/petshop', pages.petshop)
    .get('/petshops', pages.petshops)
    .get('/create-petshop', pages.createpetshop)
    .post('/save-petshop', pages.savePetshop)

//ligar o servidor
server.listen(5500)