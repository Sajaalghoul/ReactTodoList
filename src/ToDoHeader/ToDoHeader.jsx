import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ToDoHeader = ({setTasks}) => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        const value=event.target.todo.value;
        if(value){
            setTasks((prevTodos)=>
                [...prevTodos, 
                    {title:value, id:self.crypto.randomUUID(), is_completed:false},
                ]
            )
        }
        event.target.reset();
    }
  return (
    <>
      <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
      <i className="fas fa-check-square me-1"></i>
      <u>My Todo-s</u>
    </p>
    <div className="pb-2">
      <div className="card">
        <div className="card-body">
          <form className="d-flex flex-row align-items-center" onSubmit={handleSubmit}>
            <input type="text" className="form-control form-control-lg" id="todo" placeholder="Add new..."/>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default ToDoHeader;
