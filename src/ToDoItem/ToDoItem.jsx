import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { useState } from 'react';

const ToDoItem = ({task,setTasks}) => {
    ///delete handle
    const handleDelete = () => {
        setTasks((prevTodos) => prevTodos.filter((todo) => todo.id !== task.id));
      };
    //checked
    const toggleCheckbox=()=>{
        setTasks((prevTodos) =>
            prevTodos.map((todo) =>
              todo.id === task.id
                ? { ...todo, is_completed: !todo.is_completed}
                : todo
            )
          );
      }
     ///edit handling  
     const [editing,setEditing]=useState(false);
     const inputRef = React.useRef(null);
      const handleEdit = () => {
        setEditing(true);
      };
      React.useEffect(() => {
        if (editing && inputRef.current) {
          inputRef.current.focus();
          // position the cursor at the end of the text
          inputRef.current.setSelectionRange(
            inputRef.current.value.length,
            inputRef.current.value.length
          );
        }
      }, [editing]);

      const handleInpuSubmit = (event) => {
        event.preventDefault();
        setEditing(false);
      };
      const handleInputBlur = () => {
        setEditing(false);
      };
      const handleInputChange = (event) => {
        setTasks((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === task.id ? { ...todo, title: event.target.value } : todo
          )
        );
      };
  return (
     editing ? ( 
        <form  onSubmit={handleInpuSubmit} >
            <div className="input-group w-50">
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={task?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
              className="form-control"
            />
            </div>
        </form>
      ) :(
      <li className="list-group-item d-flex align-items-center border-0 bg-transparent" id={task?.id}>
            <div className="form-check">
                <input className="form-check-input me-0" type="checkbox" onChange={toggleCheckbox} checked={task.is_completed} />
            </div>
            <p className="lead fw-normal mb-0 flex-grow-1 " style={task.is_completed ? { textDecoration: "line-through" } : {}}>{task?.title}</p>
            <a href="#!" className="text-info me-3" title="Edit todo"><i className="fas fa-pencil-alt" onClick={handleEdit}></i></a>
            <a href="#!" className="text-danger" title="Delete todo" onClick={handleDelete}><i className="fas fa-trash-alt"></i></a>
    </li>)
  )

}
export default ToDoItem
