import { userEffect } from "react"
import { userSelector } from "react-redux"
import LoginPage from "../pages/LoginPage"

export default function PrivateRoute({children}){
    const {auth} = userSelector((state)=>state.userReducer)


        if(auth){
            return children
        }


    return <LoginPage></LoginPage>
}