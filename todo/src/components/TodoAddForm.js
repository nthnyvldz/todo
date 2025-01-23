import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4()

export const TodoAddForm = ({addTodo}) => {

  const [value, setTask] = useState('')

  const handleInputChange = (e) => {
    setTask(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  addTodo(value)
  setTask('')
};

  return (
    <div className='flex content-center items-center justify-center text-center bg-blue-500 font-mono text-xl text-white pb-5'>

        <form onSubmit={handleSubmit}>
            <div class="flex">
                <div class="relative w-56 lg:w-64 xl:w-80">
                    <input 
                    type="text" 
                    id="search-dropdown" 
                    class="block p-2.5 w-full z-20 text-xs text-gray-900 bg-gray-50 rounded-s-lg rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" 
                    placeholder="Add an Errand" 
                    required 
                    autoComplete='off'
                    value={value}
                    onChange={handleInputChange}/>
                    <button type="submit" class="absolute top-0 end-0 p-2.5 h-full text-xs font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Add Task
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}
