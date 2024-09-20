import {Routes, Route } from 'react-router-dom'
import Counts from './counts'
import Login from './login'
import { useContext } from "react"
import AuthContext from "../context/auth"
import Users from './users'
import Organizations from './organizations'
import Details from './orgDetails'
import UserDetails from './userDetails'

export default function Router(){
    const {user} = useContext(AuthContext)
    console.log(user)
    const authenticatedRoutes = () => {
        return (
            <Routes>
                <Route path="/counts" element={<Counts />}></Route>
                {/* <Route path="*" element={<Counts />}></Route> */}
                <Route path="/users" element={<Users />}></Route>
                <Route path="/organizations" element={<Organizations />}></Route>
                <Route path="/organizations/:id" element={<Details />}></Route>
                <Route path="/users/:id" element={<UserDetails />}></Route>

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