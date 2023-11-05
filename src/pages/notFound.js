import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>Return to previous page</p>
            <p>Go to<Link to="/">Home</Link> </p>
        </div>
    )
}

export default NotFound