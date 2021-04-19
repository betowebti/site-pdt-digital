import dynamic from 'next/dynamic'
import styles from '../../styles/Home.module.css'
import {Pages} from '../../Navbar/Dynamic/definitions'
import Navbar from '../../Navbar/index'

const Content = {} //? vou ter que ser honesto, não tenho a menor ideia de porque eu fiz isso ao invez de só linkar as páginas no navbar...

Pages.map((page) => {
  Content[page] = dynamic(() => import(`../../Navbar/Content/${page}`), {ssr: false})
})


  export default function NavbarPage({page}) {
    const Conteudo = Content[page]
    return (
      <>
        <Navbar/>
        <div className={styles.container}>
          <Conteudo/>
        </div>
      </>  
    )
  }

  export async function getStaticPaths() {
    return {
      paths: Pages.map((page) => ({params: { page: page }})),
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    console.log(params)
    return { props: {page: params.page} }
  }

  export {Pages}