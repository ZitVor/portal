import React,{useContext, useState, useCallback, useEffect} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {Loader} from '../сomponents/Loader'
import {useHttp} from '../hook/http.hook'
import { AuthContext } from '../context/AuthContext'
import {RateList} from '../сomponents/RateList'
export const Rate = () => {
  const [users, setUsers] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)

 


  const fetchUsers = useCallback(async () => {
    try {
      const fetched = await request('/api/rate', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setUsers(fetched)
    } catch (e) {}
  }, [token, request])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      {!loading && <RateList users={users} />}
    </>
  )
}