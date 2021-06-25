import React,{useContext, useState, useCallback, useEffect} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {Loader} from '../../сomponents/Loader'
import {useHttp} from '../../hook/http.hook'
import { AuthContext } from '../../context/AuthContext'
import { DecisiveList } from './../SuperUser/DecisiveList'
import '../../index.css'
export const DecisiveCall = () => {
    const [decisions, setDecisions] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
  
    const fetchDecisives = useCallback(async () => {
      try {
          console.log('here')
        const fetched = await request('/api/decisive/', 'GET', null, {
          Authorization: `Bearer ${token}`
        })
        console.log(fetched)
        console.log('dorowa')
        setDecisions(fetched)
      } catch (e) {}
    }, [token, request])
  
    useEffect(() => {
      fetchDecisives()
    }, [fetchDecisives])
  
    if (loading) {
      return <Loader/>
    }
  
    return (
      <>
        {!loading && <DecisiveList decisions={decisions} />}
      </>
    
  )
}