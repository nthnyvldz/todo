import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { RiFileUploadFill } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
uuidv4()

export const TodoEditForm = ({editTodo, task, cancelEdit}) => {
    const [value, setTask] = useState(task.todo)

    const handleInputChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(value, task.id)
        setTask('')
      };

  return (
    <div className='flex content-center items-center justify-center text-center bg-blue-500 font-mono text-xl text-white pb-5'>

        <form onSubmit={handleSubmit}>
            <div class="flex">
                <div class="relative w-56 lg:w-64 xl:w-80 flex">
                    <input 
                    type="text" 
                    id="search-dropdown" 
                    class="block p-2.5 w-full z-20 text-xs text-gray-900 bg-gray-50 rounded-s-lg rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" 
                    placeholder="Edit an Errand" 
                    required 
                    autoComplete='off'
                    value={value}
                    onChange={handleInputChange}/>
                    <div className="m-2 flex space-x-2">
                        <button type="submit" ><RiFileUploadFill className="cursor-pointer hover:text-blue-800"/></button>
                        <button onClick={() => cancelEdit(task.id)} type="submit" ><ImCancelCircle className="cursor-pointer hover:text-red-800"/></button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}
