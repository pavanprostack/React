import React, { useState } from 'react'


const Todo = () => {

  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])   // for storing Added data.

  const changeHandler = (e) => {
    setTask(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task);
    const newTodos = [...todos, task]
    setTodos(newTodos);
    setTask("");   // After  Added data, for Automatic Refresh.
  }

  const deleteHandler = (indexValue)=>{
    const filter = todos.filter((todo, index)=>{
      if(index !== indexValue)
        setTodos(filter)
      
      
    })
  }

  return <>
    <div className="container">
      <center>
        <div className="card">
          <div className="card-body">
            <h2 className='card-title'>ToDo Management Application</h2>

            <form onClick={submitHandler}>
              <input type="text" name="task" id="" className='mx-3' value={task} onChange={changeHandler} />
              <input type="submit" value='Add' name='Add' />
            </form>

            <div className="container mt-5">
              <div className="row">
                <div className="col"> 
                  {
                    todos.length > 0 ? <>
                      {
                        todos.map((todo, index) => {
                          return <div key={index}>
                            {
                              <ul className='list-group'>
                                <h3 className='list-group-item'>{todo} <button className='btn btn-danger float-right' onClick={()=>{deleteHandler(index)}}>Delete</button></h3>
                                </ul>
                            }
                          </div>

                        })
                      }
                     </> : null
                  }
                </div>
              </div>
            </div>

          </div>
        </div>
      </center>
    </div>
  </>

}

export default Todo