import React,{useContext, useState, useCallback, useEffect} from 'react'
import {Loader} from '../сomponents/Loader'
import {useHttp} from '../hook/http.hook'
import { AuthContext } from '../context/AuthContext'
import {AdminListOfUsers} from '../Admin/AdminListOfUsers'
import '../index.css'
export const AdminUsers = () => {
  const [users, setUsers] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)

  const fetchUsers = useCallback(async () => {
    try {
      const fetched = await request('/api/admin/getusers', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      console.log(fetched)
      setUsers(fetched)

    } catch (e) {
      console.log('catch')
    }
  }, [token, request])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  if (loading) {
    return <Loader/>
  }
  console.log(loading)

  return (
    <>
      {!loading && <AdminListOfUsers users={users} />}
    </>
  )
}