import React,{useContext, useState, useCallback, useEffect} from 'react'
import {NavLink, useHistory, useParams} from 'react-router-dom'
import {Loader} from '../сomponents/Loader'
import {useHttp} from '../hook/http.hook'
import { AuthContext } from '../context/AuthContext'
import { AppreciatedList } from './AppreciatedList'
import '../index.css'
export const Appreciated = () => {
  const [apprecieteds, setAppreciateds] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)
  
    const {auth} = useContext(AuthContext)
  const fetchAppreciateds = useCallback(async () => {
    try {
      const fetched = await request(`/api/decisive/apprecieted/${auth.userId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setAppreciateds(fetched)
    } catch (e) {}
  }, [token, request])

  useEffect(() => {
    fetchAppreciateds()
  }, [fetchAppreciateds])

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      {!loading && <AppreciatedList apprecieteds={apprecieteds} />}
    </>
  )
}