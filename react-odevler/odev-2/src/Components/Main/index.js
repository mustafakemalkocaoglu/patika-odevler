import React from 'react'

function Main( { setTodos, filteredTodos } ) {

    const onClickMarkAll = () => {
        
        setTodos(
            filteredTodos.map((item) => {
            const isAllCompleted = !filteredTodos.some((item) => (
                item.completed === false))
            return isAllCompleted
             ? {...item, completed: false}
             : {...item, completed: true}
            })
        )
    }

    
  return (
    <>
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label 
             onClick={onClickMarkAll} 
             htmlFor="toggle-all">
                Mark all as complete
            </label>
            <ul className="todo-list">
                {
                    filteredTodos.map((todo, i) => (
                            <li key={i} className={ todo.completed === true ? "completed" : "" }>
                                <div className="view">
                                    <input 
                                     checked={todo.completed} 
                                     onChange={() => {
                                        setTodos(filteredTodos.map((item) => (todo === item ? {...item, completed: !item.completed} : item)))
                                        }} 
                                     className="toggle" 
                                     type="checkbox" 
                                     />
                                    <label>{todo.text}</label>
                                    <button onClick={() => {
                                        setTodos(filteredTodos.filter((item) => (item !== todo)))
                                    }} className="destroy"></button>
                                </div>
                            </li>
                    ))
                }
            </ul>
        </section>
    </>
  )
}

export default Main