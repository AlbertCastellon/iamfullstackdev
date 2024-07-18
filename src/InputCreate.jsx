import { useEffect, useState } from "react"
import { redirect } from "react-router-dom"
const InputCreate = () => {
    const urlApi = 'http://localhost:3000/create'
    const [task,  setTask] = useState('')
    const [newTask, setNewTask] = useState({})
    useEffect(() => {
        if(newTask.title){
            fetch(urlApi, {
                method: 'POST', // Método HTTP
                headers: {
                  'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                },
                body: JSON.stringify(newTask), // Convertimos el payload de JS a JSON
              })
        }
 
    },  [newTask])
    
    return(
        <>
            <input type="text" vale={task} onChange={e => setTask(e.target.value)} />
            <button onClick={() => {
                setNewTask({title: task})
                window.location.replace("/");
                }
            }>Añadir</button>
        </>
    )
}

export default InputCreate