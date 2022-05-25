const express = require('express')
const app = express()

const port = 3000

//rota principal
app.get('/',(req,res)=>{
	res.send("Página Principal")
})

//conexão com servidor
app.listen(port, ()=>{
	console.log("Servidor rodando na porta 3000")
})