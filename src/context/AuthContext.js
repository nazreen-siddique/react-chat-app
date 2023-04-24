import React,{useState,useEffect,useContext} from "react";
import {useNavigate} from 'react-router-dom';
import {auth} from '../Firebase'

const AuthContext = React.createContext()

export const useAuth =()=> useContext(AuthContext)

export const AuthProvider  = ({children})=>{
    const[loading , setLoading] = useState();
    const [user ,setUser ] = useState(null)
    let navigate = useNavigate()

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setUser(user)
            setLoading(false)
            if(user) return  navigate('/chats')
            
        })
    },
    [user,navigate])

    const value = {user}

    return(
        <AuthContext.Provider value ={value}>
            {!loading && children }
        </AuthContext.Provider>
    )
}