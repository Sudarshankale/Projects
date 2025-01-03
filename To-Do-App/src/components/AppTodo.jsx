import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";


function AppTodo({onNewItem}){
    const [todoName,setTodoName] = useState("");
    const[dueDate,setDueDate] =  useState("");

    const handleNameChange = (event)=>{
        setTodoName(event.target.value);
        
    }
    const handleDateChange = (event)=>{
        setDueDate(event.target.value);
    }

    const handleAddButtonClicked = ()=>{
        onNewItem(todoName,dueDate);
        setDueDate("")
        setTodoName("")
    }

    return(
    <div className="row">
        <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" onChange={handleNameChange}  value={todoName} />
        </div>
        <div className="col-4">
            <input type="date" onChange={handleDateChange} value={dueDate}/>
        </div>
        <div className="col-2">
            <button className="btn btn-success" 
            onClick={handleAddButtonClicked}
            ><IoMdAddCircleOutline />
            </button>
        </div>
    </div>
    )
}
export default AppTodo;