import React, { useState } from 'react'
import { createContext } from 'react'
import {getAuth} from 'firebase/auth'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user,setUser]=useState({});
    const auth=getAuth();
    const navigation=useNavigate();
    useEffect(()=>{
        const unsubscribe = auth.onIdTokenChanged((user)=>{
            console.log('[from auth provide]',{user})
            if(user?.uid) {setUser(user);
            localStorage.setItem('accessToken',user.accessToken);
            return;}
            setUser();
            localStorage.clear();
            navigation('/login');
        })
        return ()=>{
            unsubscribe();
        }
    },[auth])

    
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
