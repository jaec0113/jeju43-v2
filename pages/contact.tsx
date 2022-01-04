import Layout from "../components/Layout"
import styles from "../styles/Pages.module.scss"
import {
  FaEnvelope,
  FaInstagramSquare,
  FaTwitter,
  FaMousePointer,
  FaCar,
} from "react-icons/fa"
import { GoTopButton } from "../components/Buttons"

export default function contact() {
  return (
    <Layout
      title='Contact | Jeju 4.3 Incident Website'
      keywords='Jeju 4.3, Jeju 4.3 Incident, Jeju 4.3 Massacre, Jeju 4.3 Uprising, Jeju history, April 3, Jeju April 3, contact'
      description='Find contact information for the creator of the Jeju 4.3 Incident website as well as a handful of other links to learn more.'
    >
      <div className={styles.wrapper}>
        <header className={styles.pageHeader}>
          <h1>Contact Us</h1>
          <h3>연락</h3>
        </header>
        <div className={styles.sidePageMenu}>
          <p className={styles.pageMenuLink}>
            <a href='#siteContact'>Site Designer Contact</a>
          </p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> | <br /> | <br />
          </p>
          <p className={styles.pageMenuLink}>
            <a href='#socialMedia'>Recommended Social Media</a>
          </p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> | <br /> | <br />
          </p>
          <p className={styles.pageMenuLink}>
            <a href='#jeju43Foundation'>Jeju 4.3 Foundation</a>
          </p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> | <br /> | <br />
          </p>
          <p className={styles.pageMenuLink}>
            <a href='#otherLinks'>Other Links</a>
          </p>
        </div>
        <main className={styles.pageInfo}>
          <a id='#top'></a>
          <div className={styles.pageSection}>
            <h2>
              <a id='siteContact'>Website Designer Contact Information</a>
            </h2>
            <p>
              If have questions or comments regarding this page please contact
              Tedd Chee below.
            </p>
            <p>
              <FaEnvelope />{" "}
              <a
                href='mailto:coffeeaje0113@gmail.com?subject=Re: Jeju 4.3 Website'
                target='_blank'
                rel='noreferrer noopener'
                className={styles.links}
              >
                Email Tedd Chee
              </a>
            </p>
            <p>
              <FaInstagramSquare />{" "}
              <a
                href='https://instagram.com/coffeetog13'
                className={styles.links}
              >
                @coffeetog13
              </a>
            </p>
            <p>
              <FaTwitter />{" "}
              <a href='https://twitter.com/jaec0113' className={styles.links}>
                @jaec0113
              </a>
            </p>
            <p>
              <FaMousePointer />{" "}
              <a href='https://coffeeaje.com' className={styles.links}>
                coffeeaje.com
              </a>
            </p>
          </div>
          <div className={styles.pageSection}>
            <h2>
              <a id='socialMedia'>Recommended Jeju 4.3 Social Media</a>
            </h2>
            <p>Coming Soon</p>
          </div>
          <div className={styles.pageSection}>
            <h2>
              <a id='jeju43Foundation'>Jeju 4.3 Foundation</a>
            </h2>
            <p>You can visit the Jeju 4.3 Foundation{`'`}s website</p>
            <p>
              <FaMousePointer />{" "}
              <a href='http://www.jeju43peace.org' className={styles.links}>
                www.jeju43peace.org
              </a>
            </p>
            <p>If in Jeju, you can visit to the Jeju 4.3 Peace Park</p>
            <p>
              <FaCar />{" "}
              <a
                href='https://www.google.com/maps/place/Jeju+4+%C2%B7+3+Peace+Park/@33.4511593,126.6102081,15z/data=!3m1!4b1!4m5!3m4!1s0x350d029a13f4c3e9:0x691e88caa1d442da!8m2!3d33.4511596!4d126.6189414'
                className={styles.links}
              >
                430 Myeongnim-ro, Bonggae-dong, Jeju-si
              </a>
            </p>
          </div>
          <div className={styles.pageSection}>
            <h2>
              <a id='otherLinks'>
                Other Links for Jeju 4.3 Incident Information
              </a>
            </h2>
            <p>
              Check these sites for more information about the Jeju 4.3 Incident
            </p>
            <p>
              <FaMousePointer />{" "}
              <a href='http://thejejumassacre.com' className={styles.links}>
                The Jeju Massacre
              </a>
              <span>
                : A site (not currently being updated) that has some information
                about Jeju 4.3 as well as more recent information about legal
                happenings related to 4.3.
              </span>
            </p>
            <p>
              <FaMousePointer />{" "}
              <a href='https://jejudarktours.org/en' className={styles.links}>
                Jeju Dark Tours
              </a>
              <span>
                : This site is similar in content to this site. There are a few
                more events listed, but some English content is not available.
                More information in Korean is available. If you live in Jeju or
                in Korea, this group also does guided tours to 4.3 locations.
              </span>
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <GoTopButton />
          </div>
        </main>
      </div>
    </Layout>
  )
}
