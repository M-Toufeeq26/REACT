
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="Link"> 
        <h2>Welcome</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/phn">Phn</Link>
    </div>
  )
}

export default Navbar
