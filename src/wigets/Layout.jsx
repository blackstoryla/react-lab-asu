import { Outlet } from "react-router-dom"
import {Header} from "../components/Header.jsx"
import {Footer} from "../components/Footer.jsx"

export function Layout(){
    return(
        <>
            <Header></Header>

            <Outlet />
            
            <Footer />
        </>
    )
}