import { MdDelete } from "react-icons/md";


function TodoItem({todoName,todoDate,onDeleteClick}){
    // let todoName = "Buy Milk";
    // let todoDate = "4/10/2024"

    return(
    <div className="row">
        <div className="col-6">
            {todoName}
        </div>
        <div className="col-4">
            {todoDate}
        </div>
        <div className="col-2">
            <button className="btn btn-danger"
            onClick={()=>onDeleteClick(todoName)}
            ><MdDelete />
            </button>
        </div>
    </div>
    )
}

export default TodoItem;