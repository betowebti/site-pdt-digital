import styles from '../styles/Home.module.css'
import NavBar from '../Navbar/index'

export default function Home({data}) {
  return (
    <div className={styles.container}>
        <NavBar/>
    </div>
  )
}