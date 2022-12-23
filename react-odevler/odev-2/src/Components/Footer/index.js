import React from 'react'

function Footer( { todos, setTodos, filteredTodos, status, setStatus } ) {

    const changeStatus = (e) => {
        setStatus(e.target.innerHTML)
    }


    const completed = filteredTodos.filter((todo) => todo.completed === true);
    const unCompleted = todos.filter((item) => item.completed === false);

    const clearCompleted = (e) => {
        e.preventDefault();
        setTodos(todos.filter((item) => (item.completed === false)))
    }
    

  return (
    <>
        <footer className="footer">
            <span className="todo-count">
                <strong>{unCompleted.length}</strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <a onClick={changeStatus} href="#/" className={status === "All" ? "selected" : ""}>All</a>
                </li>
                <li>
                    <a onClick={changeStatus} href="#/" className={status === "Active" ? "selected" : ""}>Active</a>
                </li>
                <li>
                    <a onClick={changeStatus} href="#/" className={status === "Completed" ? "selected" : ""}>Completed</a>
                </li>
            </ul>

            <button 
             className={completed.length === 0 ? "hidden" : "clear-completed"}
             onClick={clearCompleted}
             >
                Clear completed
            </button>
        </footer>
    </>
  )
}

export default Footer