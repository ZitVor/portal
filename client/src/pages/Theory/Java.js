
import React,{useContext} from 'react'
import { AuthContext } from './../../context/AuthContext'
import {NavLink, useHistory} from 'react-router-dom'

import { Theory } from './Theory'


export const  Java = () =>{
    
    const history = useHistory()
    const auth = useContext(AuthContext)
    return(
        
        <div>
        <Theory></Theory>
            <h1>Java</h1>
        </div>
    )
}