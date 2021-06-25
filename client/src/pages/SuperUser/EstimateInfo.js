import React,{useContext, useState} from 'react'
import {useHttp} from '../../hook/http.hook'
import { AuthContext } from '../../context/AuthContext'
import {Link} from 'react-router-dom'
import {useMessage} from '../../hook/message.hook'
export const EstimateInfo = ({decisive}) => {
   const id = decisive.decisiveuser
   
  const message = useMessage()
   console.log(id)
   const {request} = useHttp()
  const auth = useContext(AuthContext)
  
  const [ischeckedestimate, setCheckedestimate] = useState(false);
  const [checked, setChecked] = useState(false);
 
   const [comment, setComment] = useState('')


   const pressHandler = async() => {
          try {
            const data = await request(`/api/decisive/updatedicisive/${id}`, 'PUT', {
                decisiveuser:decisive.decisiveuser,
                decisiveuseremail:decisive.decisiveuseremail,
                checkinguser: auth.userId,
                checkinguseremail: auth.userEmail, 
                text: decisive.text,
                task: decisive.task,
                checked,
                estimate:ischeckedestimate,
                comment
             }, {
            Authorization: `Bearer ${auth.token}`
         })
         if(ischeckedestimate){

            const data2 = await request(`/api/decisive/updaterate/${decisive.decisiveuser}`, 'PUT',null , {
               Authorization: `Bearer ${auth.token}`
            })
         }
         message('Ответ отправлен')
       } catch (e) {}
     }

    return (
     <>
         <h4>Рішення</h4>
         
         <strong>Завдання:   </strong>
         <p  className="btn grey lighten-1 black-text"><Link to={`/usertask/${decisive.task}` }>Відкрити</Link></p>
         <p>Рішення створив: {decisive.decisiveuseremail}</p>
         <div style={{border:"solid 1px lightgray", padding:"5px", margin:"5px"}}>
         <pre >{decisive.text}</pre>
         </div>
         <label style={{padding:"10px", fontSize:"15px", color:"black"}}>
         Оцінка позитивна:
         <input style={{    position: "inherit",   padding: "10px", margin:"10px",   opacity: 1, pointerEvents: "auto"}}
            name="isPositive"
            type="checkbox"
            checked={ischeckedestimate}
            onChange={()=>setCheckedestimate(!ischeckedestimate)} />
            </label>
           
         <div>
         
         <div> <label style={{padding:"10px", fontSize:"15px", color:"black"}}>
         Перевірено:
         <input style={{    position: "inherit",   padding: "10px",  margin:"10px",  opacity: 1,  pointerEvents: "auto"}}
            name="isCheck"
            type="checkbox"
            checked={checked}
            onChange={()=>setChecked(!checked)} />
            </label></div>
         <div className="input-field">
         
          <input style={{border:"solid 1px lightgray", padding:"5px", margin:"5px", width:"99%", height:"200px"}}
            placeholder="Введіть комментар" 
                  id="comment"
                  name = "comment"
                  type="comment"
                  value={comment}
                  onChange={(e)=>setComment(e.target.value)}
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