import React, { useState } from 'react'

function Header( {filteredTodos, setTodos }) {

    const[todo, setTodo] = useState({text: "", completed: false})


    const onChangeInput = (e) => {
        setTodo({...todo, text: e.target.value})
    }


    const onSubmitInput = (e) => {
        e.preventDefault();

        if (e.target.value === "") {
            return false;
        }
        setTodos([...filteredTodos, todo]);

        setTodo({text: "", completed: false})
    }


  return (
    <>
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmitInput}>
                <input 
                className="new-todo" 
                placeholder="What needs to be done?" 
                onChange={onChangeInput}
                value={todo.text}
                autoFocus />
            </form>
        </header>
    </>
  )
}

export default Header