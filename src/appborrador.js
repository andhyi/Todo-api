const express = require('express')

const app = express()

//? porque se usa el status 200? son status correctos
app.get('/', (req, res) => {
    res.status(200).json({message:'Server Ok!'})
})


//? rutas ->  paths y verebos http
//? controladores -> logica y acciones referentes a la DB
//? servicios -> todo lo relacionado al req y res

//! habilita el recibir datos en formato JSON
app.use(express.json())



app.get('/todos', (req, res) => {
    res.status(200).json(database)
})

app.get("/todos/:id", (req, res) => {
    const id =Number(req.params.id)

    const data = database.filter(todo => todo.id === id)


    res.status(200).json({my_id: id, respuesta: data[0]})
})

app.post('/todos', (req, res) => {

    //? req =request = peticion
    //? res = response = respuesta

    const {id, title} = req.body
    //* Valores falsy
    //? null
    //? undefine
    //? ..
    //? 0
    //? false
    //* Valores truty
    //? 'hdhhkh'
    //? 1
    //? {}
    //? []
    //? true

    if(!id || !title){
      res.status(400).json({message: "Missing Data"}); 

    }else {
        database.push({
        id,
        title,
        is_completed: false
        })
    }

    
    

    res.status(200).json({database})
})


app.listen(8000, () => {
    console.log('Server stated at port 8000')
})