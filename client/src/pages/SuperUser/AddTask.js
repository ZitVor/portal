import React, {useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {useHttp} from '../../hook/http.hook'
import { AuthContext } from '../../context/AuthContext'
import '../../index.css'
export const  AddTask = () =>{
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const [task, setTask] = useState({
      topic:'', body:'', authoremail: auth.userEmail
  })
    
  const changeHandler = event => {
    setTask({ ...task, [event.target.name]: event.target.value })
  }
  const pressHandler = async() => {
         try {
        const data = await request('/api/taskfromusers/create', 'POST', {...task}, {
          Authorization: `Bearer ${auth.token}`
        })
        console.log(data)
        history.push(`/usertask/${data.task._id}`)
      } catch (e) {}
    }
    useEffect(() => {
        window.M.updateTextFields()
      }, [])

    return(
        <div className="create">
        <p className="pageName" style={{textAlign:"center", fontWeight:"900"}}>Створити завдання</p>
            <div className="input-field  ">
                  <input 
                  placeholder="Введіть назву завдання" 
                  id="topic"
                  type="text"
                  name ="topic"
                  value={task.topic}
                  onChange={changeHandler}
                  />
                  <input 
                  placeholder="Введіть текст завдання" 
                  id="body"
                  name = "body"
                  type="text"
                  value={task.body}
                  onChange={changeHandler}
                  />
            </div>
      
            <button 
                className="btn grey lighten-1 black-text"
                onClick={pressHandler}>
                Створити 
            </button>
        </div>
    )
    
}