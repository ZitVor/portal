import React,{useContext,useCallback,useEffect,useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import {useHttp} from '../hook/http.hook'

import "../index.css"
const {auth} = require('..')
export const Navbar = () => {
    const history = useHistory()
   const auth = useContext(AuthContext)
   
 const logoutHandler= event =>{
    event.preventDefault()
    auth.logout()
    history.push('/')
 }

    //TODO Удалить создать задание и реализовать переход по ссылке 
    return  (
        <nav>
            <div className="nav-wrapper  teal darken-1" style = {{padding:'0 2rem'}}>
                <ul clasName="nav-mobile" >
                <li className="logo">PeerProject</li>
                    <li><NavLink to ="/theory">Теорія</NavLink></li>
                    <li><NavLink to ="/practice">Практика</NavLink></li>
                    <li><NavLink to ="/forum">Форум</NavLink></li>
                    <li><NavLink to ="/userrate">Рейтинг</NavLink></li>
                    <li><NavLink to ="/superuser">СуперЮзер</NavLink></li>
                    {auth.isAdmin && <li><NavLink to ="/admin">Админ</NavLink></li>}
                   <li><a href="/" onClick={logoutHandler}>Вийти</a></li>
                    <li><NavLink to ="/yourtask">{auth.userEmail}</NavLink></li>
                    <li style={{paddingLeft: '15px'}}>{auth.userRate}</li>
                    
                </ul>
            </div>
        </nav>
    )
}