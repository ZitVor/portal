import React, {useContext, useEffect, useState, useCallback} from 'react'
import {useHttp} from '../hook/http.hook'
import {CarriedOutList} from '../Auth/CarriedOutList'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../сomponents/Loader'
import {useHistory, useParams, NavLink} from 'react-router-dom'

export const YourTask = () => 
{ 
    const [carriedouts, setCarriedouts] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const auth  = useContext(AuthContext)
  
    const fetchCarriedouts = useCallback(async () => {
      try {
        const fetched = await request(`/api/decisive/carriedout/${auth.userId}`, 'GET', null, {
          Authorization: `Bearer ${token}`
        })
        setCarriedouts(fetched)
      } catch (e) {}
    }, [token, request])
  
    useEffect(() => {
      fetchCarriedouts()
    }, [fetchCarriedouts])
  
    if (loading) {
      return <Loader/>
    }
  
    return (
      <>
        {!loading && <CarriedOutList carriedouts={carriedouts} />}
      </>
    )
}