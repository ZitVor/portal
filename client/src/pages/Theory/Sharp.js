
import React,{useContext} from 'react'
import { AuthContext } from './../../context/AuthContext'

import {Link} from 'react-router-dom'

import { Theory } from './Theory'


export const  Sharp = () =>{
    
    return(
        
        <div>
        <Theory></Theory>
            <div style={{padding:"20px"}}><Link to ="/asp">C# и .NET | Введение</Link></div>
            <div style={{padding:"20px"}}><Link to ="/asp">C# и .NET | Структури програми</Link></div>
            <div style={{padding:"20px"}}><Link to ="/asp">C# и .NET | Переменные</Link></div>
            <div style={{padding:"20px"}}><Link to ="/asp">C# и .NET | Литералы</Link></div>
            <div style={{padding:"20px"}}><Link to ="/asp">C# и .NET | Типы данных</Link></div>
            <div style={{padding:"20px"}}><Link to ="/asp">КC# и .NET | Консольный ввод и вывод даних</Link></div>
            <div style={{padding:"20px"}}><Link to ="/asp">C# и .NET | Классы и обьекты</Link></div>
            <div style={{padding:"20px"}}><Link to ="/asp">ASP.NET Core | Фильтры RazorPages</Link></div>
        </div>
    )
}