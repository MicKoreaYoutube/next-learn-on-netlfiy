import styles from './Component.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Link href="/"> 
          <a><img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} /></a>
        </Link>
      </footer>
    </>
  )
}
