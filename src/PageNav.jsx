import { NavLink } from "react-router";

function PageNav() {
    return (
        <nav>
            <NavLink to="/" end>
                <h2>Do Better</h2>
            </NavLink>
            <NavLink to="/portfolio">
                <h5>Portfolio</h5>
            </NavLink>
            <NavLink to="/about">
                <h5>About Charles</h5>
            </NavLink>
            
        </nav>
    )
}

export default PageNav