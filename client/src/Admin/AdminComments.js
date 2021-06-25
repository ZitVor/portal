import React,{useContext, useState, useCallback, useEffect} from 'react'
import {Loader} from '../сomponents/Loader'
import {useHttp} from '../hook/http.hook'
import { AuthContext } from '../context/AuthContext'
import {AdminListOfComments} from '../Admin/AdminListOfComments'
import '../index.css'
export const AdminComments = () => {
  const [comments, setComments] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)

  const fetchComments = useCallback(async () => {
    try {
      const fetched = await request('/api/admin/getcomments', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setComments(fetched)
    } catch (e) {}
  }, [token, request])

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      {!loading && <AdminListOfComments comments={comments} />}
    </>
  )
}