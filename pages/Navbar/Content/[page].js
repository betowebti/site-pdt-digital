import dynamic from 'next/dynamic'
import styles from '../../../styles/Home.module.css'

const Content = {}
const Pages = [
  'About',
  'Test',
  'TurmaBoa'
]

Pages.map((page) => {
  Content[page] = dynamic(() => import(`../Content/Render/${page}`), {ssr: false})
})


  function NavbarPage({page}) { //todo usar data estática
    const Conteudo = Content[page]
    return (
      <div className={styles.container}>
          <Conteudo/>
      </div>
    )
  }

  export async function getStaticPaths() {
    return {
      paths: Pages.map((page) => ({params: { page: page }})),
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    return { props: {page: params.page} }
  }

  export default NavbarPage
  export {Pages}