import React,{useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import '../../index.css'

export const  Theory = () =>{
    const history = useHistory()
    const auth = useContext(AuthContext)
 
    return(
        <div className="main">
                <ul className="menu">
                    <li style={{color: '#ff0000',  fontWeight:900}}><NavLink to ="/theory/Sharp">C#</NavLink></li>
                    <li style={{color: '#ff0000',  fontWeight:900}}><NavLink to ="/theory/JS">JS</NavLink></li>
                    <li style={{color: '#ff0000',  fontWeight:900}}><NavLink to ="/theory/sql">SQL</NavLink></li>
                    <li style={{color: '#ff0000',  fontWeight:900}}><NavLink to ="/theory/java">JAVA</NavLink></li>
                    <li style={{color: '#ff0000',  fontWeight:900}}><NavLink to ="/theory/cpp">C++</NavLink></li>
                </ul>
           </div>
    )
}