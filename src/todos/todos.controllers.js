
const uuid = require('uuid')

const todoDB = [{
    id: 1,
    title: 'este es un titulo',
    is_completed: false
},
{
    id: 2,
    title: 'este es un titulo',
    is_completed: false
}]

const getAllTodos = () => {
    return todoDB
}

const getTodoById = (id) => {

    //! for(let i=0, i<todoDB.length, i++) {
    //!     if(todoDB[i].id === id) {
    //!            return todoDB[i]
    //! }
    //! }

    const data = todoDB.find( task => task.id === id)
    return data
}
    //? creamos un controlador
const createTodo = (title) => {
    const newTodo = {
        id: uuid.v4(),
        title,
        is_completed: false
    }

    //? agregamos a nuestro arreglo:
todoDB.push(newTodo)
return newTodo
    
}

//? exportamos objetos

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo
}



console.log(createTodo('esta es una prueba'))