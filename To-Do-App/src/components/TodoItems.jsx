import TodoItem from "./TodoItem"

const TodoItems = ({todoItems,onDeleteClick}) =>{
    return(
    <div className='Text'>
    {todoItems.map(item => (
        <TodoItem key={item} todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}></TodoItem>
    ))}
    
    </div>
    )
}

export default TodoItems

