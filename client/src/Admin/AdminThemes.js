import React,{useContext, useState, useCallback, useEffect} from 'react'
import {Loader} from '../сomponents/Loader'
import {useHttp} from '../hook/http.hook'
import { AuthContext } from '../context/AuthContext'
import {AdminListOfThemes} from '../Admin/AdminListOfThemes'
import '../index.css'
export const AdminThemes = () => {
  const [themes, setThemes] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)

  const fetchThemes = useCallback(async () => {
    try {
      const fetched = await request('/api/admin/getthemes', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      console.log(fetched)
      setThemes(fetched)
    } catch (e) {
      console.log('catch')
    }
  }, [token, request])

  useEffect(() => {
    fetchThemes()
  }, [fetchThemes])

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      {!loading && <AdminListOfThemes themes={themes} />}
    </>
  )
}