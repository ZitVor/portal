import React,{useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import "../index.css"
const {auth} = require('..')
export const Comment = () => {
    const postId = useParams().id
    
    //TODO Удалить создать задание и реализовать переход по ссылке 
    return (
        <nav>
        </nav>
    )
}