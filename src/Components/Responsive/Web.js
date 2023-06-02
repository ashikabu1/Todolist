import { useEffect, useState } from "react"
import {Navbar, Container, Nav} from "react-bootstrap"
import Ashik123logo from '../../assets/images/Ashik123logo.png'
import Linklogo from'../../assets/images/Linklogo.png'
import Falogo from'../../assets/images/Falogo.png'
import Instagramlogo from'../../assets/images/Instagramlogo.png'
import './Style.css'


export const Web = () =>{
    const [activeLink,setActiveLink] = useState('home')
    const [scrolled,setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll",onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }
  return (
    <div className="parent">
      
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={Ashik123logo} alt="Logo" style={{width:"7rem",height:"5rem"}}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <div className="child">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </div>
        </Nav>
        <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={Linklogo} alt="" style={{width:"2rem",height:"2rem"}} /></a>
                <a href="#"><img src={Falogo} alt="" style={{width:"2rem",height:"2rem"}}/></a>
                <a href="#"><img src={Instagramlogo} alt="" style={{width:"2rem",height:"2rem"}}/></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  </div>

  )
}
