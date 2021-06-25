import {createContext} from 'react'

function noop(){}
export const AuthContext = createContext({
    token:null,
    userId:null,
    login: noop,
    logout: noop,
    isAuthenticated:false,
    userRate: null,
    userEmail:null,
    isAdmin:false
})