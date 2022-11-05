import { NavLink } from "react-router-dom";
import Logo from "../Components/Logo.jsx"
import "./NavBar.css"

export default function NavBar(){
  return<>
    <nav>
      <Logo />
      <ul>
        <li><NavLink to="/" end className="navbar-links">Home</NavLink></li>
        <li><NavLink to="/repositories" className="navbar-links">Repositories</NavLink></li>
        <li><NavLink to="/errorPageTest" className="navbar-links">Test</NavLink></li>
                
        </ul>
      </nav>
  </>
}