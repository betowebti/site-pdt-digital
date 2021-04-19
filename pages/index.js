import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  return (
    <div className={styles.container}>
        <Batata nome={data.name} cor='Pink'/>
    </div>
  )
}

function Batata({nome,cor}){
  return(
    <div style={{color:cor}}>{nome}</div>
  )
}

export async function getStaticProps(context) {

  //const res = await fetch(`http://localhost:3000/api/hello`)
  const data = 'Thabata'

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}