import React,{useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory, useParams} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hook/http.hook'
import {Loader} from '../../сomponents/Loader'
import {EstimateInfo} from './EstimateInfo'
import '../../index.css'
export const  Estimate = () =>{
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [decisive, setDecisive] = useState(null)
    const {id} = useParams()
  console.log(id)
    const getDesicive = useCallback(async () => {
      try {
        const fetched = await request(`/api/decisive/getby/${id}`, 'GET', null, {
          Authorization: `Bearer ${token}`
        })
        console.log(fetched)
        setDecisive(fetched)
      } catch (e) {}
    }, [token, id, request])
  
    useEffect(() => {
      getDesicive()
    }, [getDesicive])
  
    if (loading) {
      return <Loader />
    }
  
    return (
      <>
        { !loading && decisive && <EstimateInfo decisive={decisive} /> }
      </>
    )
    
}