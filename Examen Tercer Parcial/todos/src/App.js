import React, { useEffect } from 'react';
import { firebase } from './firebase'

function App() {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState("")
  const [editMode, setEditMode] = React.useState(false)
  const [todoId, setTodoId] = React.useState("")
  const [todoDescription, setTodoDescription] = React.useState("")
  const [todoPriority, setTodoPriority] = React.useState("")

  useEffect(() => {
    const getData = async () => {
      const db = firebase.firestore()
      try {
        const data = await db.collection('todos').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        console.log(arrayData)
        setTodos(arrayData)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const add = async (e) => {
    e.preventDefault()
    if (!todo.trim()) {
      console.log('sin texto')
      return
    }

    try {
      const db = firebase.firestore()
      const data = await db.collection('todos').add({
        name: todo,
        description: todoDescription,
        prioity: todoPriority
      })

      const todoNew = {
        name: todo,
        description: todoDescription,
        prioity: todoPriority
      }

      setTodos([
        ...todos,
        { id: data.id, ...todoNew }
      ])

      setTodo("")

    } catch (error) {
      console.error(error)
    }

  }

  const deleteTodo = async (id) => {
    try {
      const db = firebase.firestore()
      await db.collection("todos").doc(id).delete()

      const todosFilter = todos.filter(todo => todo.id !== id)
      setTodos(todosFilter)
    } catch (error) {

    }
  }

  const edit = async (e) => {
    e.preventDefault()
    console.log("se ejecuto el editar")
    if (!todo.trim()) {
      console.log("sin texto")
      return
    }

    try {
      const db = firebase.firestore()
      await db.collection("todos").doc(todoId).update({
        name: todo,
        description: todoDescription,
        prioity: todoPriority

      })

      const arrayEdit = todos.map(item => (
        item.id === todoId ? { id: item.id, name: todo, description: todoDescription, prioity: todoPriority } : item
      ))
      setTodos(arrayEdit)
      setTodo("")
      setTodoId("")
      setEditMode(false)
      setTodoDescription("")
      setTodoPriority("")

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <form onSubmit={editMode ? edit : add}>
        <div>
          <input
            type="text"
            placeholder="Add todo"
            className="form-control mb-2"
            value={todo}
            onChange={e => setTodo(e.target.value)}
            name="todo"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Add description"
            className="form-control mb-2"
            value={todoDescription}
            onChange={e => setTodoDescription(e.target.value)}

          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Add priority"
            className="form-control mb-2"
            value={todoPriority}
            onChange={e => setTodoPriority(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-sm   btn-primary">
          {
            editMode ? "Edit" : "Add"
          }
        </button>
      </form>

      <hr />

      <ul className="list-group">
        {
          todos.map(todo => {
            console.log(todo);
            return (
            <li className="list-group-item" key={todo.id}> 
            <h3>{todo.name}</h3> 
            <span>{todo.description}</span> 
            <p>{todo.prioity}</p>
                <button className="btn btn-sm   btn-primary   float-right" onClick={() => { deleteTodo(todo.id) }}>Delete</button>

                <button className="btn btn-sm  btn-primary float-right  mr-2" onClick={
                  () => { setTodo(todo.name); setTodoId(todo.id); setEditMode(todo.id) }
                }>Edit</button>
              </li>

            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
