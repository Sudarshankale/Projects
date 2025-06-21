import { useState } from "react";
import "./App.css";
import ToDoForm from "./ToDoForm";
import Todos from "./Todos";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [todos, setTodo] = useState([
    { id: 1, title: "Learn JavaScript", completed: false },
    { id: 2, title: "Do project", completed: true },
    { id: 3, title: "Make Notes", completed: false },
  ]);

  const addTodo = (newTodo) => {
    setTodo((prevState) => [...prevState, newTodo]);
  };

  const removeTodo = (id) => {
    setTodo((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  const toggleCompleted = (id) => {
    // const newTodos = [];
    // for(let todo of todos){
    //   if(todo.id === id){
    //     newTodos.push({...todo, completed: !todo.completed})
    //   }else{
    //     newTodos.push(todo)
    //   }
    // }
    // setTodo(newTodos)

    setTodo((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return { ...todo };
        }
      });
    });
  };
  return (
    <>
      <div className="container">
      <ToastContainer/>
      <h1 className="main-title">Todo list </h1>
      <ToDoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
      </div>
    </>
  );
}

export default App;
