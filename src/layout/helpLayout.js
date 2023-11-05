import { Outlet,NavLink } from "react-router-dom"
import Faq from "../pages/helpPages/faq"
import Contacts from "../pages/helpPages/contacts"
import Email from "../pages/helpPages/email"

function HelpLayout() {
    return (
        <div className="helpLayout">
            <header>
                <h1>Help</h1>
                <nav>
                    <NavLink to="faq" element={<Faq></Faq>}>FAQ</NavLink>
                    <NavLink to="contacts" element={<Contacts></Contacts>}>Contacts</NavLink>
                    <NavLink to="email" element={<Email></Email>}>Email</NavLink>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}

export default HelpLayout