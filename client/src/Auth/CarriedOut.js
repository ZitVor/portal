import React,{useContext, useState, useCallback, useEffect} from 'react'
import {NavLink, useHistory, useParams} from 'react-router-dom'
import {Loader} from '../сomponents/Loader'
import {useHttp} from '../hook/http.hook'
import { AuthContext } from '../context/AuthContext'
import {CarriedOutList} from './CarriedOutList'
import '../index.css'
export const CarriedOut = () => {
  const [carriedouts, setCarriedouts] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)
  const auth  = useContext(AuthContext)

  const fetchCarriedouts = useCallback(async () => {
    try {
      const fetched = await request(`/api/decisive/carriedout/${auth.userId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      console.log(fetched)
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