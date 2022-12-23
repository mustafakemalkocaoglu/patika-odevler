import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useEffect, useState } from 'react'

function Todos() {
    const [todos, setTodos] = useState([])

    const [filteredTodos, setFilteredTodos] = useState([todos])
    const [status, setStatus] = useState("All")

    
    useEffect(() => {
        
        const filter = () => {
            if (status === "All") {
                setFilteredTodos(todos)
            }
            else if (status === "Active") {
                setFilteredTodos(todos.filter((item) => (item.completed === false)))
            }
            else {
                setFilteredTodos(todos.filter((item) => (item.completed === true)))
            }

        }
        filter()

    }, [todos, status])


  return (
    <>
        <section className="todoapp">
            <Header
             filteredTodos={filteredTodos}
             setTodos={setTodos}
            />
            
            <Main
             setTodos={setTodos}
             filteredTodos={filteredTodos}
            />

            <Footer
             todos={todos}
             setTodos={setTodos}
             filteredTodos={filteredTodos}
             status={status}
             setStatus={setStatus}/>
        </section>
    </>
  )
}

export default Todos