import navbarStyles from './styles/navbar.module.scss'
import hoverlinkStyles from './styles/hoverlink.module.scss'
import logoStyles from './styles/logo.module.scss'
import styles from '../styles/Home.module.css'
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'
import Pages from './Dynamic/definitions'


export default function NavBar() {
  return (
    <Navbar className={`thinShadow ${navbarStyles.navBg}`} style={{padding:"0",height:'120px'}} fixed="top">
      <Logo href="/" style={{backgroundColor:"white"}}/>
      <Navbar.Toggle className={navbarStyles.toggleFill} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {Pages.map((page) => (
            <HoverLink key={page} href={`/Navbar/${page[0]}`} text={page[1]}/>
          ))}
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
        here ? <a className={`${hoverlinkStyles.hoverable} ${hoverlinkStyles.selected}`} href={href}>{text}</a> : <a className={hoverlinkStyles.hoverable} href={href}>{text}</a>
    )
}

export function Model({content}){
  return (
        <div className={styles.container}>
          <NavBar/>
          {content}
        </div>
  )    
}