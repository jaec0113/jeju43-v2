import Link from "next/link"
import Layout from "../components/Layout"
import styles from "../styles/Pages.module.scss"
import { GoTopButton } from "../components/Buttons"

export default function about() {
  return (
    <Layout
      title='About | Jeju 4.3 Incident Website'
      keywords='Jeju 4.3, Jeju 4.3 Incident, Jeju 4.3 Massacre, Jeju 4.3 Uprising, Jeju history, April 3, Jeju April 3, about'
      description='Learn more about the creation of this website and the reasons that motivated it. Find out other places where information can be found related to the Jeju 4.3 Incident.'
    >
      <div className={styles.wrapper}>
        <header className={styles.pageHeader}>
          <h1>About Jeju 4.3 Website</h1>
          <h3>제주4.3 웹사이트에 대해</h3>
        </header>
        <div className={styles.sidePageMenu}>
          <p className={styles.pageMenuLink}>
            <a href='#aboutCreator'>About</a>
          </p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> | <br />
          </p>
          <p className={styles.pageMenuLink}>
            <a href='#jeju43Name'>What{`'`}s in a Name?</a>
          </p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> | <br />
          </p>
          <p className={styles.pageMenuLink}>
            <a href='#usingSite'>Using the Website</a>
          </p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> |<br />
          </p>
          <p className={styles.pageMenuLink}>
            <a href='#hopes'>Hopes</a>
          </p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> | <br />
          </p>
          <p className={styles.pageMenuLink}>
            <a href='#thankYous'>Thank You</a>
          </p>
        </div>

        <main className={styles.pageInfo}>
          <a id='#top'></a>
          <div className={styles.pageSection}>
            <h2>
              <a id='aboutCreator'>About the site creator</a>
            </h2>
            <p>
              Tedd Chee is an adopted Korean-American who spent almost 10 years
              living in South Korea while teaching English. He spent four years
              living in Jeju Island where he first learned about the Jeju 4.3
              Incident. Since learning about Jeju 4.3, it has become a passion
              of his to help spread knowledge and understanding of this tragedy.
            </p>
          </div>
          <div className={styles.pageSection}>
            <h2>
              <a id='jeju43Name'>What{`'`}s in a Name?</a>
            </h2>
            <p>
              This site uses the official name for the <i>제주4.3사건</i> (read{" "}
              {`"`}Jeju Sa.Sam sageon{`"`} in Korean) which is the{" "}
              <i>Jeju April 3rd Incident</i>. Other names that are used commonly
              when discussing this incident include <i>The Jeju 4.3 Massacre</i>
              ,{` `}
              <i>The Jeju 4.3 Uprising</i>, and{` `}
              <i>The Jeju 4.3 Rebellion</i>.
            </p>
          </div>
          <div className={styles.pageSection}>
            <h2>
              <a id='usingSite'>Using this Website</a>
            </h2>
            <p>
              On the main page of this site, you can find a series of events
              that were either important in the Jeju 4.3 Incident or are
              representative examples of events that happened during the Jeju
              4.3 Incident. Events are listed in chronological order. Click on
              the event to learn more about it.
            </p>
            <p>
              The{" "}
              <Link href='/tldr'>
                <a className={styles.links}>Jeju 4.3 tl;dr page</a>
              </Link>{" "}
              contains a short summary of the Jeju 4.3 Incident.
            </p>
            <p>
              The{" "}
              <Link href='/more'>
                <a className={styles.links}>Learn More page</a>
              </Link>{" "}
              contains some extra information addressing controversies
              surrouding 4.3, current happenings related to 4.3, and some
              opinions on teaching and learning about 4.3.
            </p>
            <p>
              The{" "}
              <Link href='/contact'>
                <a className={styles.links}>Contact page</a>
              </Link>{" "}
              contains links to contact the site creator as well as links to
              other Jeju 4.3 websites and official organizations.
            </p>
          </div>
          <div className={styles.pageSection}>
            <h2>
              <a id='hopes'>Hopes For This Page</a>
            </h2>
            <p>
              The hope for this page is to provide both a general summary as
              well as more detailed information for non-Korean speaking people
              to learn more about the Jeju 4.3 Incident. I hope that people who
              visit this site come away with more knowledge and understanding of
              this tragedy and how it continues to affect people in Jeju today.
            </p>
          </div>
          <div className={styles.pageSection}>
            <h2>
              <a id='thankYous'>Thank You and Credits</a>
            </h2>
            <p>
              <a href='http://jeju43peace.org/' className={styles.links}>
                Jeju 4.3 Peace Foundation
              </a>
            </p>
            <p>
              <a
                href='http://www.43archives.or.kr/mobile/searchMain.do'
                className={styles.links}
              >
                Jeju 4.3 Archives
              </a>
            </p>
            <p>
              <a href='http://www.jeju43.org/' className={styles.links}>
                Jeju 4.3 Research Center
              </a>
            </p>
            <p>
              <a href='https://jejudarktours.org/en/' className={styles.links}>
                Jeju Dark Tours
              </a>
            </p>
            <p>
              <a href='http://thejejumassacre.com' className={styles.links}>
                Darryl Coote (The Jeju Massacre)
              </a>
            </p>
            <p>
              If you{`'`}d like to read the government issued report on the Jeju
              4.3 Incident, you can find it here: {` `}
              <a
                href='https://www.jeju43peace.or.kr/kor/sub01_01_01.do'
                className={styles.links}
              >
                Please visit here to download and read the report
              </a>
            </p>
          </div>
          <GoTopButton />
        </main>
      </div>
    </Layout>
  )
}
