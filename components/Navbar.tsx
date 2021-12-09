import { useState } from "react"
import Link from "next/link"

import styles from "../styles/Components.module.scss"

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const showNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <>
      <button
        id='button'
        onClick={showNavbar}
        className={styles.navButton}
        style={
          navbar
            ? { transform: "rotate(360deg)", transition: "transform 1s linear" }
            : { transform: "rotate(0deg)", transition: "transform 1s linear" }
        }
      ></button>
      <nav
        className={styles.nav}
        style={
          navbar
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-110%)" }
        }
      >
        <div className={styles.navItems}>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </div>
      </nav>
    </>
  )
}
