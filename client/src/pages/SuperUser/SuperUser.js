import React,{useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import '../../index.css'
export const  SuperUser = () =>{
    //TODO  если рейтинг меньше не пускать
    
    const history = useHistory()
    const auth = useContext(AuthContext)
    return auth.userRate <= 101? <div>Наберіть більше рейтингу</div> :(
        <div> 
        <ul className="menu">
          <li className="fromUsers" style={{color: '#ff0000',  fontWeight:900}}><NavLink to ="/superuser/addtask"> Створити завдання</NavLink></li>
        <li style={{color: '#ff0000',  fontWeight:900}}><NavLink to ="/decisivecall">Оцінити</NavLink></li>
    </ul>
        </div>
    )
}