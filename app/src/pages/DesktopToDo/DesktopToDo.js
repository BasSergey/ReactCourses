import React, { useState, useEffect } from 'react';
import DesktopToDoForm from './DesktopToDoForm';
import "./DesktopToDo.css"


const DesktopToDo = ({ todos, completeTodo, removeToDo, updateTodo }) => {

  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };
  if (edit.id) {
    return <DesktopToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos && todos.map((todo, index) => (
    <>

      <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className='icons'>


          <i className="material-icons prefix"
            onClick={() => removeToDo(todo.id)}
            className="material-icons"

          >delete </i>

          <i
                onClick={()=>setEdit({id: todo.id, value:todo.text})}
                className="material-icons"

          >create </i>


        </div>

      </div>
    </>
  ))

}
export default DesktopToDo;