import {Routes, Route } from 'react-router-dom'
import Counts from './counts'
import Login from './login'
import { useContext } from "react"
import AuthContext from "../context/auth"

export default function Router(){
    const {user} = useContext(AuthContext)
    console.log(user)
    const authenticatedRoutes = () => {
        return (
            <Routes>
                <Route path="/counts" element={<Counts />}></Route>
                <Route path="*" element={<Counts />}></Route>
            </Routes>
        )
    }
    const unauthenticatedRoutes = () => {
         return (
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="*" element={<Login />}></Route>
            </Routes>
        )
    }
    return(
        <>
            {user ? authenticatedRoutes() : unauthenticatedRoutes()}
        </>
    )
}