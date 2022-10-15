const express = require('express')

const app = express()

const todoRouter = require('./todos/todos.router')

//? rutas ->  paths y verebos http
//? controladores -> logica y acciones referentes a la DB
//? servicios -> todo lo relacionado al req y res

//! habilita el recibir datos en formato JSON
app.use(express.json())

//? porque se usa el status 200? son status correctos
app.get('/', (req, res) => {
    res.status(200).json({message:'Server Ok!'})
})


app.use('/', todoRouter)



app.listen(8000, () => {
    console.log('Server stated at port 8000')
})