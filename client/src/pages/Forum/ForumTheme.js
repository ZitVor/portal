import React,{useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory, useParams} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hook/http.hook'
import {Loader} from '../../сomponents/Loader'
import {ForumThemeCard} from '../../сomponents/ForumThemeCard'
import '../../index.css'
export const  ForumTheme = () =>{
    const{token} = useContext(AuthContext)
    const {request,loading} = useHttp()
    const [post,setPost]=useState(null)
    const postId = useParams().id

    const getPost = useCallback(async () =>{
       try{
            const fetched = await request(`/api/forumtheme/${postId}`,'GET',null,{
                Authorization:`Bearer ${token}`
            })
            setPost(fetched)
       } 
       catch(e){}
    },[token, postId, request])

    useEffect(()=>{
        getPost()
    },[getPost])

    const [comments, setComments] = useState([])
    const fetchComments = useCallback(async () => {
      try {
        const fetched = await request(`/api/comment/${postId}`, 'GET', null, {
          Authorization: `Bearer ${token}`
        })
        setComments(fetched)
        console.log(fetched)
      } catch (e) {}
    }, [token, request])
  
    useEffect(() => {
        fetchComments()
    }, [fetchComments])
  
    

    if(loading){
        return <Loader/>
    }
    return(
        <>
        {!loading && post && <ForumThemeCard post={post} comments={comments}/>}
       </>
    )
    
}