import React,{useContext, useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {useHttp} from '../hook/http.hook'
import { useMessage } from '../hook/message.hook'
import { AuthContext } from '../context/AuthContext'
import '../index.css'

export const UserTaskCard = ({taskfromusers}) => {
  
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const {id} = useParams()
  const [decision, setDecision] = useState('')
   const message = useMessage()
   console.log(taskfromusers)
  const pressHandler = async() => {
         try {
           console.log(decision)
        const data = await request(`/api/decisive/create/${id}`, 'POST', {text: decision, decisiveuseremail: auth.userEmail}, {
          Authorization: `Bearer ${auth.token}`
        })

        message('Відповідь була створена')
      } catch (e) {}
    }
    useEffect(() => {
        window.M.updateTextFields()
      }, [])

    return (
     <>
         <h3>Завдання</h3>
         <p>Назва завдання:</p>
         <strong>{taskfromusers.topic}</strong>
         <p>Сутність завдання:</p>
         <strong>{taskfromusers.body}</strong>
         <p>Дата створення:{new Date(taskfromusers.date).toLocaleDateString()}</p>
         <p>Створив:</p>
         <strong>{taskfromusers.authoremail}</strong>
         <div>
         <div className="input-field">
          <input
            placeholder="Введіть відповідь" 
                  id="text"
                  name = "text"
                  type="text"
                  value={decision}
                  onChange={e => setDecision(e.target.value)}
          />
        </div>
        <button 
                className="btn grey lighten-1 black-text"
                onClick={pressHandler}
                >Створити 
            </button>
         </div>
     </>    
    )
}