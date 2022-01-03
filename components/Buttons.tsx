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
    <button className={styles.goTopButton}>
      <a href='#Top'>Top</a>
    </button>
  )
}

export { BackButton, GoTopButton }
