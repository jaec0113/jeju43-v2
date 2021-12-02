import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const showNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <>
      <button id='button' onClick={showNavbar}>
        <Image
          src='/camellia-pin-drawing.png'
          alt='camellia flower drawing'
          width={50}
          height={50}
          layout='fixed'
        />
      </button>
      <div style={navbar ? { display: "block" } : { display: "none" }}>
        <nav>
          <button onClick={showNavbar}>
            <Image
              src='/camellia-pin-drawing.png'
              alt='camellia flower drawing'
              width={50}
              height={50}
              layout='fixed'
            />
          </button>
          <div>
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
