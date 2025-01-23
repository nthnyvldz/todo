import './App.css';
import { TodoAddForm } from './components/TodoAddForm';
import { TodoTop } from './components/TodoTop';
import { TodoContainer } from './components/TodoContainer';
import { TodoHooks } from './components/hooks/TodoHooks';
import { TodoEditForm } from './components/TodoEditForm';

export default function App() {

  const {todos, previewTodo, addTodo, deleteTodo, toggleEdit, editTodo, cancelEdit, handleComplete} = TodoHooks()

  return (
    <div className='flex items-center justify-center content-center h-screen w-full bg-blue-950'>
      <div className='w-72 md:w-80 lg:w-96 bg-blue-500'>
        <TodoTop />
        <TodoAddForm addTodo={addTodo}/>
        
        {todos.map(todo => (
          !todo.editing ? 
            (<TodoContainer todos={todo} key={todo.id} deleteTodo={deleteTodo} handleComplete={handleComplete} toggleEdit={toggleEdit} previewTodo={previewTodo}/>) 
            : 
            (<TodoEditForm editTodo={editTodo} task={todo} key={todo.id} cancelEdit={cancelEdit} />)
        ))}
      </div>
    </div>
  )
}
