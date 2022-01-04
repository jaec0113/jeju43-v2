import Link from "next/link"
import styles from "../styles/Components.module.scss"

function BackButton() {
  return (
    <button className={styles.backButton}>
      <Link href='/'>
        <a>Go Back</a>
      </Link>
    </button>
  )
}

function GoTopButton() {
  return (
    <a href='#Top'>
      <button className={styles.goTopButton}>Top</button>
    </a>
  )
}

export { BackButton, GoTopButton }
