import React,{useContext, useState, useCallback, useEffect} from 'react'
import {NavLink, useHistory, useParams} from 'react-router-dom'
import {Loader} from '../сomponents/Loader'
import {useHttp} from '../hook/http.hook'
import { AuthContext } from '../context/AuthContext'
import { HandedOverList } from './HandedOverList'
import '../index.css'
export const HandedOver = () => {
  const [handedovers, setHandedovers] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)

  
    const auth = useContext(AuthContext)
  const fetchHandedovers = useCallback(async () => {
    try {
      console.log('1')
      const fetched = await request(`/api/decisive/handedover/${auth.userId}/`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setHandedovers(fetched)
    } catch (e) {
      console.log(e)
    }
  }, [token, request])

  useEffect(() => {
    fetchHandedovers()
    console.log('dddd')
  }, [])

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      {!loading && <HandedOverList handedovers={handedovers} />}
    </>
  )
}