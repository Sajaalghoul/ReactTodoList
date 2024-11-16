import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ToDoHeader from '../ToDoHeader/ToDoHeader';
import ToDoList from '../ToDoList/ToDoList';
import { useState } from 'react';
const AppContainer = () => {
    const [tasks,setTasks]=useState([]);
  return (
    <div className="d-flex justify-content-center">
       <section className="vh-100 w-50 ">
       <div className="container py-5 h-100">
       <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card" id="list1" style={{ borderRadius: '.75rem', backgroundColor: '#eff1f2' }}>
          <div className="card-body py-4 px-4 px-md-5">
            <ToDoHeader setTasks={setTasks}></ToDoHeader>
            <hr className="my-4" />
            <ToDoList tasks={tasks} setTasks={setTasks} ></ToDoList>
          </div>
        </div>
      </div>
       </div>
       </div>
       </section>
    </div>
  )
}
export default AppContainer
