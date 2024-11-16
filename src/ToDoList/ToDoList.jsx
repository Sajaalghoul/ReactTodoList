import './ToDoList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = ({tasks,setTasks}) => {
  const todos=[tasks  && tasks.length > 0? (
    tasks?.map((todo)=>{
      return <ToDoItem key={todo.id} task={todo} setTasks={setTasks}></ToDoItem>
    })
  ) : (
    <p>what are you going to acheive?</p>
  )]
  
  return (
    <>
       <ul className="list-group rounded-0 bg-transparent">
       {todos}
        </ul>
</>
    
  );
}

export default ToDoList;