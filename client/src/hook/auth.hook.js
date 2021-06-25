import { useCallback, useState, useEffect } from "react"


const storageName = 'userData'
export const useAuth = ()=>{
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)
    const [userRate, setRate] = useState(null)
    const [userEmail, setEmail] = useState(null)
    const login = useCallback((jwtToken, id, userRate, userEmail) => {
        setToken(jwtToken)
        setUserId(id)
        setEmail(userEmail)
        setRate(userRate)
        localStorage.setItem(storageName, JSON.stringify( {
                userId:id, token:jwtToken, rate: userRate, email:userEmail
            }))
           
    }, []) 

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setRate(null)
        setEmail(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem(storageName))

        if(data && data.token){
            
            login(data.token, data.userId, data.rate, data.email)
            console.log(data.token, data.userId, data.rate, data.email)
        }
        setReady(true)
        //console.log(data.email)
    },[login])
    return {login, logout, token, userId,userRate,userEmail, ready}
}