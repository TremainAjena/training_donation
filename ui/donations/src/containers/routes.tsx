import {Routes, Route } from 'react-router-dom'
import Counts from './counts'
import Login from './login'

export default function Router(){

    return(
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Counts />}></Route>
        </Routes>
    )
}