import Layout from "../components/Layout"
import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Pages.module.css"
import {
  FaEnvelope,
  FaInstagramSquare,
  FaTwitter,
  FaMousePointer,
  FaCar,
} from "react-icons/fa"

export default function contact() {
  return (
    <Layout title='Contact | Jeju 4.3 Incident Website'>
      <Head>
        <meta
          name='keywords'
          content='Jeju 4.3, Jeju 4.3 Incident, Jeju 4.3 Massacre, Jeju 4.3 Uprising, Jeju history, April 3, Jeju April 3, contact'
        />
        <meta
          name='descriptions'
          content='Find contact information for the creator of the Jeju 4.3 Incident website as well as a handful of other links to learn more.'
        />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.sidePageMenu}>
          <p className={styles.pageMenuLink}>Site Designer Contact</p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> | <br /> | <br />
          </p>
          <p className={styles.pageMenuLink}> Recommended Social Media</p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> | <br /> | <br />
          </p>
          <p className={styles.pageMenuLink}>Jeju 4.3 Foundation</p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> | <br /> | <br />
          </p>
          <p className={styles.pageMenuLink}>Other Links</p>
        </div>
        <div className={styles.pageInfo}>
          <div className={styles.pageHeader}>
            <h1>Contact and Other Links</h1>
          </div>
          <div className={styles.pageSection}>
            <h2>Website Designer Contact Information</h2>
            <p>
              If have questions or comments regarding this page please contact
              Tedd Chee below.
            </p>
            <p>
              <FaEnvelope /> coffeeaje0113@gmail.com
            </p>
            <p>
              <FaInstagramSquare />{" "}
              <Link href='https://instagram.com/coffeetog13'>
                <a className={styles.links}>@coffeetog13</a>
              </Link>
            </p>
            <p>
              <FaTwitter />{" "}
              <Link href='https://twitter.com/coffeeaje'>
                <a className={styles.links}>@coffeeaje</a>
              </Link>
            </p>
            <p>
              <FaMousePointer />{" "}
              <Link href='https://coffeeaje.com'>
                <a className={styles.links}>coffeeaje.com</a>
              </Link>
            </p>
          </div>
          <div className={styles.pageSection}>
            <h2>Recommended Jeju 4.3 Social Media</h2>
            <p>Coming Soon</p>
          </div>
          <div className={styles.pageSection}>
            <h2>Jeju 4.3 Foundation</h2>
            <p>You can visit the Jeju 4.3 Foundation{`'`}s website</p>
            <p>
              <FaMousePointer />{" "}
              <Link href='http://www.jeju43peace.org'>
                <a className={styles.links}>www.jeju43peace.org</a>
              </Link>
            </p>
            <p>If in Jeju, you can visit to the Jeju 4.3 Peace Park</p>
            <p>
              <FaCar />{" "}
              <Link href='https://www.google.com/maps/place/Jeju+4+%C2%B7+3+Peace+Park/@33.4511593,126.6102081,15z/data=!3m1!4b1!4m5!3m4!1s0x350d029a13f4c3e9:0x691e88caa1d442da!8m2!3d33.4511596!4d126.6189414'>
                <a className={styles.links}>
                  430 Myeongnim-ro, Bonggae-dong, Jeju-si
                </a>
              </Link>
            </p>
          </div>
          <div className={styles.pageSection}>
            <h2>Other Links for Jeju 4.3 Incident Information</h2>
            <p>
              Check these sites for more information about the Jeju 4.3 Incident
            </p>
            <p>
              <FaMousePointer />{" "}
              <Link href='http://thejejumassacre.com'>
                <a>The Jeju Massacre</a>
              </Link>
              <span>
                A site (not currently being updated) that has some information
                about Jeju 4.3 as well as more recent information about legal
                happenings related to 4.3
              </span>
            </p>
            <p>
              <FaMousePointer />{" "}
              <Link href='https://jejudarktours.org/en'>
                <a>Jeju Dark Tours</a>
              </Link>
              <span>
                This site is similar in content to this site. There are a few
                more events listed, but some English content is not available.
                More information in Korean is available. If you live in Jeju or
                in Korea, this group also does guided tours to 4.3 locations.
              </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
