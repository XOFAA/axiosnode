
const express=require('express')
const {engine}=require('express-handlebars')
const routes=require('./router/router')
const app = express();
const porta=3000;

app.use(express.urlencoded({extended:true}))
app.engine('handlebars',engine())
app.set('view engine', 'handlebars')

app.use('/',routes)

app.listen(porta,()=>{
    console.log("Servidor Iniciado com sucesso:",porta)
})