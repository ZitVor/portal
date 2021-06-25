import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hook/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useHistory, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
export const DoneCard = ({done}) => 
{
  console.log(done)
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const {id} = useParams()

  const pressHandler = async () => {
      try {
        const data = await request(`/api/decisive/delete/${id}`, 'DELETE', null, {
          Authorization: `Bearer ${auth.token}`
        })
        console.log(data)
       history.push(`/usertask/${done.task}`)
      } catch (e) {
          console.log()
      }
    }
  

    useEffect(() => 
    {
      window.M.updateTextFields()
    }, [])
  
  return (
      <div> 
      <h4>Рішення</h4>
          <div>

            <p  style={{paddingTop:'10px'}}>Виконувавший завдання:<strong>{done.decisiveuseremail}</strong></p>
           
            <p  style={{paddingTop:'10px'}}>Оцінювач: <strong>{done.checkinguseremail}</strong></p>
            <p>Рішення</p>
            <div style={{border:"solid 1px lightgray", padding:"5px", margin:"5px"}}>
         <pre >{done.text}</pre>
         </div>
            
            <p  style={{paddingTop:'10px'}}><Link to={`/usertask/${done.task}`}>Переглянути завдання</Link></p>
            <p>Перевірено:</p>
            <div style={{
                                    width:"20px", height:"20px", borderRadius:"50%", backgroundColor: done.checked?"green":"red"
                                }} />
            <p>Оцінено:</p>
            <div style={{
                                    width:"20px", height:"20px", borderRadius:"50%", backgroundColor: done.estimate?"green":"red"
                                }} />
            <p  style={{paddingTop:'10px'}}>{done.comment}</p>
          </div> 
          <button className="btn grey lighten-1 black-text"
                onClick={pressHandler}
                >Переробити
          </button>
          </div>
  )
}