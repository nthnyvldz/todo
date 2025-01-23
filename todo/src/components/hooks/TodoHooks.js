import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useEffect } from 'react';
uuidv4()

export const TodoHooks = () => {

    const [todos, setTodos] = useState([])
    const [previewTodo, setPreview] = useState(null)

    useEffect(() => {
      const stored = localStorage.getItem('todos')
      
      if (stored){
        setTodos(JSON.parse(stored))
      }
    }, [])
  
    const updateStorage = todo => {
      localStorage.setItem('todos', JSON.stringify(todo))
    }

    const addTodo = async(todo) => {
      try{
        const newTodos = [...todos, {todo: todo, id: uuidv4(), completed: false, editing: false}]
        setTodos(newTodos)
        updateStorage(newTodos)
  
        setPreview(newTodos[newTodos.length - 1])
        await new Promise(resolve => setTimeout(resolve, 1000))
        setPreview(null)

      } catch(err) {
        console.log('Error saving data: ', err)
      }
    }

    const toggleEdit = id => {
      const toEdit = todos.map(todo => todo.id === id ? {...todo, editing: !todo.editing} : todo)
      setTodos(toEdit)
    }

    const editTodo = async(task, id) => {
        try{
          const editingTodo = todos.map(todo => todo.id === id ? {...todo, todo: task, editing: false} : todo)
          setTodos(editingTodo)
          updateStorage(editingTodo)

          setPreview(editingTodo[editingTodo.length - 1])
          await new Promise(resolve => setTimeout(resolve, 1000))
          setPreview(null)
          
        } catch(err){
          console.log('Error updating data: ', err)
        }
    }

    const cancelEdit = id => {
      const cancel = todos.map(todo => todo.id === id ? {...todo, editing: !todo.editing}: todo)
      setTodos(cancel)
    }

    const deleteTodo = id => {
      const deleteTodo = todos.filter(todo => todo.id !== id)
      setTodos(deleteTodo)
      updateStorage(deleteTodo)
    }

    const handleComplete = id => {
      const completed = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
      setTodos(completed)
      updateStorage(completed)
    }

return ({todos, addTodo, previewTodo, setTodos, deleteTodo, toggleEdit, cancelEdit, editTodo, handleComplete})

}

