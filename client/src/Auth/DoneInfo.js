import React,{useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory, useParams} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hook/http.hook'
import {Loader} from '../сomponents/Loader'
import {DoneCard} from '../Auth/DoneCard'
export const  DoneInfo = () =>{
    const{token} = useContext(AuthContext)
    const {request,loading} = useHttp()
    const [done,setDone]=useState(null)
    const doneId = useParams().id

    const getDone = useCallback(async () =>{
       try{
            const fetched = await request(`/api/decisive/getby/${doneId}`,'GET',null,{
                Authorization:`Bearer ${token}`
            })
            setDone(fetched)
       } 
       catch(e){}
    },[token, doneId, request])

    useEffect(()=>{
        getDone()
    },[getDone])

    if(loading){
        return <Loader/>
    }
    return(
        <>
        {!loading && done && <DoneCard done={done} />}
       </>
    )
    
}