import React from 'react'
import { MdDelete, MdModeEdit } from "react-icons/md";

export const TodoContainer = ({todos, deleteTodo, handleComplete, toggleEdit, previewTodo}) => {

  const isPreview = todos.id === previewTodo?.id;  
  
  return (
    <div className="flex justify-center w-full items-center content-center mb-4">

        <div className={`${isPreview ? 'bg-blue-950 rounded-lg w-56 lg:w-64 xl:w-80' : "bg-white rounded-lg w-56 lg:w-64 xl:w-80  hover:bg-blue-300 hover:font-bold"}`}>
            <div className="p-3">

                <div className="text-sm lg:text-sm  text-gray-600 flex items-center justify-between" key={todos.id}>

                  <div className='flex overflow-hidden'>
                    <input onClick={() => handleComplete(todos.id)} type="checkbox" className='mr-2 accent-blue-400' checked={todos.completed}/>
                    <p className={`${isPreview ? 'italic font-bold opacity-70' : todos.completed ? 'line-through italic font-bold': ''}`}>{isPreview ? previewTodo?.todo : todos.todo}</p>
                    {/* <p className={` ${todos.completed ? 'line-through italic font-bold': ''}`}>{todos.todo}</p> */}
                  </div>
                    
                    <div className='flex space-x-2'>
                    <MdModeEdit onClick={() => toggleEdit(todos.id)} className='cursor-pointer hover:text-blue-900'/>
                    <MdDelete onClick={() => deleteTodo(todos.id)} className='cursor-pointer hover:text-red-900'/>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
  )
}
