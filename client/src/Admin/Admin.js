import React from 'react'
import { NavLink } from 'react-router-dom'
export const  Admin = () =>{
    return(
        <div className="create">
        <p className="pageName" style={{textAlign:"center", fontWeight:"900"}}>Панель адміністратора</p>
            <ul style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            
            <li 
                className="btn grey lighten-1 black-text"
                ><NavLink to ="/admin/themes/" style={{color:'black'}}>Управління темами</NavLink>
                
            </li>
            <li 
                className="btn grey lighten-1 black-text"
                ><NavLink to ="/admin/comments/" style={{color:'black'}}>Управління комментарями</NavLink> 
            </li>
            <li 
                className="btn grey lighten-1 black-text"
                ><NavLink to ="/admin/tasks" style={{color:'black'}}>Управління завданнями</NavLink>
            </li>
            <li 
                className="btn grey lighten-1 black-text"
                >
                <NavLink to ="/admin/users/" style={{color:'black'}}>Управління коричтувачами</NavLink> 
            </li>
            </ul>
        </div>
    )
    
}