import { NavLink,Outlet } from "react-router-dom"
import HelpLayout from "./helpLayout"

function RootLayout() {
    return (
    <div className="rootLayout">
        <header>
            <nav>
                <h1>jobrouter</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="help">Help</NavLink>
                    
            </nav>
        </header>
        <main>
            <Outlet></Outlet>
        </main>    

    </div>
    )
}

export default RootLayout