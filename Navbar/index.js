import navbarStyles from './styles/navbar.module.scss'
import hoverlinkStyles from './styles/hoverlink.module.scss'
import logoStyles from './styles/logo.module.scss'
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'


export default function NavBar() {
  return (
    <Navbar className={`thinShadow ${navbarStyles.navBg}`} style={{padding:"0"}} fixed="top" expand="lg">
      <Logo href="/" style={{backgroundColor:"blue"}}/>
      <Navbar.Toggle className={navbarStyles.toggleFill} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{marginLeft:'10%'}}>
          <HoverLink href="/Navbar/About" text="Sobre Nós"/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export function Logo({href, style}) {
    return (<>
        <Navbar.Brand className={logoStyles.logo} href={href}/>
    </>)
}

export function HoverLink({text,href,here}) {
    return (
        here ? <a className={hoverlinkStyles.hoverable} href={href}>{text}</a> : <a className={`${hoverlinkStyles.hoverable} ${hoverlinkStyles.selected}`} href={href}>{text}</a>
    )
}