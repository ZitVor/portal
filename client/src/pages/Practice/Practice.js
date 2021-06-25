import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import '../../index.css'


export const  Practice = () =>{
     
    const history = useHistory()
    const auth = useContext(AuthContext)
    return(
        
        <div>
          <ul clasName="nav-mobile" style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                    <li><NavLink to ="/practice/fromSite">Від сайту</NavLink></li>
                    <li><NavLink to ="/practice/fromUsers">Від користувачів</NavLink></li>
                </ul>
        </div>
    )
}