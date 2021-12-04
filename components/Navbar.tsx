import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.scss"

import camelliaFlower from "../public/camellia-pin-drawing.png"

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const showNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <>
      <button id='button' onClick={showNavbar} className={styles.openButton}>
        <Image
          src={camelliaFlower}
          alt='camellia flower drawing'
          width={50}
          height={50}
          layout='fixed'
        />
      </button>
      <div style={navbar ? { opacity: 1 } : { opacity: 0 }}>
        <nav className={styles.nav}>
          <button onClick={showNavbar} className={styles.closeButton}>
            <Image
              src={camelliaFlower}
              alt='camellia flower drawing'
              width={50}
              height={50}
              layout='fixed'
            />
          </button>
          <div className={styles.navItems}>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/about'>
              <a>About Us</a>
            </Link>
            <Link href='/background'>
              <a>4.3 Background & Actors</a>
            </Link>
            <Link href='/contact'>
              <a>Contact & Links</a>
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
