import { Outlet } from "react-router"
import Navbar from "../Navbar/"
import "./layout.css"

export default function Layout() {
    return (
        <div className="Layout">
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}