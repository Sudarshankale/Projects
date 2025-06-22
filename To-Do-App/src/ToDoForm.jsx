import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

const ToDoForm = ({addTodo}) => {

    const [title,setTitle] = useState("");
    function handleSubmit(e){
       e.preventDefault();
       if(title.trim().length === 0){
          toast.error("Please fill Input !!",{
            autoClose:2000
          })
          return;
       }
       const newTodo = {
        id:uuidv4(),
        title:title,
        completed:false
       }
       addTodo(newTodo)
       setTitle("");
    }

    
  return (
    <form onSubmit={handleSubmit} className='todoForm'>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  className='todoForm__input'/>
        <button type='submit' className='todoForm__btn'>Add</button>
    </form>
  )
}

export default ToDoForm