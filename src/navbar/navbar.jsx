// import { NavLink, useNavigate } from "react-router-dom"
// import './nav.css'
// import { useState } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faBars } from "@fortawesome/free-solid-svg-icons"
// const Navbar = () => {
//     const [showNav, setShowNav] = useState(false)
//     const toggleNavItems = () => {
//         setShowNav(!showNav)
//     }
//     const [showNavbar, setShowNavbar] = useState(false)
//     const handleShowNavbar = () => {
//         setShowNavbar(!showNavbar)
//     }
//     return (

//         <nav className="navbar">
//             <div className="section-navbar">
//                 <div className="logo-section">
//                     <h1>RDRTech</h1>
//                 </div>
//                 <div className="menu-icon" onClick={handleShowNavbar}>
//                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
//                 </div>
//                 <div className={`nav-elements ${showNavbar &&'active'}`}>
//                     <ul>
//                         <li> <NavLink to='#home' >Home</NavLink></li>
//                         <li> <NavLink >About</NavLink></li>
//                         <li> <NavLink >Contect</NavLink></li>
//                     </ul>
//                 </div>
//             </div >
//         </nav>

//     )
// }
// export default Navbar
import { Navbar, Nav, Container } from "react-bootstrap";
import './nav.css'
import logo from '../Home/images/Screenshot_2024-03-18_224045-removebg-preview.png'
export const NavbarBootstrap = () => {
    return (
        <>
            <div>
                <Navbar className="header-nav-bar-container  opacity-2 "  expand='lg' >
                    <Container >
                        <div>
                            <Navbar.Brand href="/" className=" nav-brand text-dark fw-bold"> <img src={logo} alt="" className="nav-brand-logo" width={90} /></Navbar.Brand>
                        </div>
                        <div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id='basic-navbar-nav'>
                                <Nav className="me-auto nav-elements"  >
                                    <Nav.Link href="/" className=" nav-elements-home fs-5 text-dark fw-bold">Home</Nav.Link>
                                    <Nav.Link href="#about" className=" nav-elements-home fs-5  text-dark fw-bold">About Us</Nav.Link>
                                    <Nav.Link href="#service" className=" nav-elements-home fs-5  text-dark fw-bold">Services</Nav.Link>
                                    <Nav.Link href="#contct" className="nav-elements-home fs-5 text-dark fw-bold">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>

                    </Container>
                </Navbar>
            </div>
        </>
    )
}