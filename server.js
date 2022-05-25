const express = require('express')
const app = express()

const port = 3000
app.set("view engine", "ejs");
app.use(express.static('./Views'));

//rota principal
app.get('/',(req,res)=>{
	res.render("pages/index")
})
//rota pagina do controller
app.get('/controller',(req,res)=>{
	res.render("pages/paginaControle")
})

//conexão com servidor
app.listen(port, ()=>{
	console.log("Servidor rodando na porta 3000")
})