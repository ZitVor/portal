import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hook/http.hook'
import {useMessage} from '../hook/message.hook'
import {AuthContext} from '../context/AuthContext'
export const  AuthPage = () =>{

  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request,error, clearError} = useHttp()
    const [form, setForm] = useState({
        email:'', password:''
    })
    
      useEffect(()=>{
          message(error)
          clearError()
      }, [error, message,clearError])

      useEffect(() => {
        window.M.updateTextFields()
      })
    const changeHandler = event =>{
        setForm({...form, [event.target.name]:event.target.value})
    }

    const registerHandler = async() =>
    {
      try{
        const data = await request('/api/auth/register', 'POST',{...form})
         console.log('Data', data)
         message(data.message)
      }
      catch(e){

      }
    }

    const loginHandler = async() =>{
      try{
        const data = await request('/api/auth/login', 'POST',{...form})
         console.log('Auth', data)
        
         auth.login(data.token, data.userId, data.rate, data.email)
         message(data.message)
      }
      catch(e){

      }
    }
    return(
    <div className="row">
        <div className = "col s6 offset-s3">
            <h1>PeerProject</h1>
            <div className="card  teal darken-1">
              <div className="card-content white-text">
                 <span className="card-title">Авторизація</span>
                 <div>

                <div className="input-field ">
                  <input 
                  placeholder="Введіть імейл" 
                  id="email" 
                  type="text" 
                  name="email"
                  onChange={changeHandler}
                  
                  value={form.email}
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="input-field">
                  <input 
                  placeholder="Введіть пароль" 
                  id="password" 
                  type="password" 
                  name="password"
                  onChange={changeHandler}
                  
                  value={form.password}
                  />
                  <label htmlFor="email">Password</label>
                </div>

                 </div>
              </div>
                 <div className="card-action">
                    <button 
                    className="btn yellow darken-4" 
                    style={{marginRight:10}}
                    disabled={loading}
                    onClick={loginHandler}>
                    Увійти
                    </button>
                    <button 
                    className="btn grey lighten-1 black-text"
                    onClick={registerHandler}>
                    Реєстрація
                    </button>
                 </div>
            </div>
        </div>
    </div>
    )
}