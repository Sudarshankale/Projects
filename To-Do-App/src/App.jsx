import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from "./components/AppName.jsx";
import AppTodo from "./components/AppTodo.jsx";
import TodoItems from './components/TodoItems.jsx';
import WelcomeMessage from './components/WelcomeMessage.jsx'
function App() {

  const initialTodoItems = [
//   {
//     name:'Buy Milk',
//     dueDate:"4/10/2024"
//   },
//   {
//      name:'Go to college',
//     dueDate:"4/10/2024"
//   },
//   {
//     name:'Hello',
//    dueDate:"4/10/2024"
//  }
]

const [todoItems,setTodoItems] = useState(initialTodoItems)

const handleNewItem = (itemName,itemDueDate)=>{
  console.log(`New Item Added ${itemName} ${itemDueDate}`)
  const newTodoItems = [...todoItems,{name:itemName,dueDate:itemDueDate}]
  setTodoItems(newTodoItems);
}

const handleDeleteButton=(todoItemName)=>{
    console.log(`Item Deleted ${todoItemName}`)
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
}

  return (
  <center className="todo-container">
    <AppName />
    <AppTodo onNewItem ={handleNewItem} />
    {todoItems.length===0 &&<WelcomeMessage></WelcomeMessage>}
    <TodoItems todoItems={todoItems} onDeleteClick = {handleDeleteButton}></TodoItems>
    
  </center>
  )
}

export default App
