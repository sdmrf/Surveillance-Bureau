import "./Header.scss"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="Navbar">
        <div className="Wrapper">
            <div className="Sections">
                <Link to = "/Complaints" className="Section">Complaints</Link>
                <Link to = "/About" className="Section">About</Link>
                <Link to = "/Contact" className="Section">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Header