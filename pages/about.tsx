import Link from "next/link"
import Head from "next/head"
import Layout from "../components/Layout"
import styles from "../styles/Pages.module.scss"

export default function about() {
  return (
    <Layout title='About | Jeju 4.3 Incident Website'>
      <Head>
        <meta
          name='keywords'
          content='Jeju 4.3, Jeju 4.3 Incident, Jeju 4.3 Massacre, Jeju 4.3 Uprising, Jeju history, April 3, Jeju April 3, about'
        />
        <meta
          name='descriptions'
          content='Learn more about the creation of this website and the reasons that motivated it. Find out other places where information can be found related to the Jeju 4.3 Incident.'
        />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.sidePageMenu}>
          <p className={styles.pageMenuLink}>About</p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> | <br />
          </p>
          <p className={styles.pageMenuLink}>What{`'`}s in a Name?</p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> | <br />
          </p>
          <p className={styles.pageMenuLink}>Using the Website</p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> |<br />
          </p>
          <p className={styles.pageMenuLink}>Hopes</p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> | <br />
          </p>
          <p className={styles.pageMenuLink}>Thank You</p>
        </div>
        <div className={styles.pageInfo}>
          <div className={styles.pageHeader}>
            <h1>About</h1>
          </div>
          <div className={styles.pageSection}>
            <h2>About</h2>
            <p>
              Tedd Chee is an adopted Korean-American who spent almost 10 years
              living in South Korea while teaching English. He spent four years
              living in Jeju Island where he first learned about the Jeju 4.3
              Incident. Since learning about Jeju 4.3, it has become a passion
              of his to help spread knowledge and understanding of this tragedy.
            </p>
          </div>
          <div className={styles.pageSection}>
            <h2>What{`'`}s in a Name?</h2>
            <p>
              This site uses the official name for the 제주4.3사건 (Jeju Sa.Sam
              sageon in Korean) which is the {`'`}Jeju April 3rd Incident{`'`}.
              Other names that are used include {`'`}The Jeju 4.3 Massacre{`'`},
              {`'`}The Jeju 4.3 Uprising{`'`}, and
              {`'`}The Jeju 4.3 Rebellion{`'`}.
            </p>
          </div>
          <div className={styles.pageSection}>
            <h2>Using this Website</h2>
            <p>
              Scroll down the main page to see events that occurred during the
              Jeju April 3rd Incident. Click on the {`'`}Read More{`'`} button
              to learn more about the event. Click on the {`'`}More Info
              {`'`} link in the menu to read some more context and observations
              related to the Jeju 4.3 Incident.
            </p>
          </div>
          <div className={styles.pageSection}>
            <h2>Hopes For This Page</h2>
            <p>
              The hope for this page is to provide both a general summary as
              well as more detailed information for non-Korean speaking people
              to learn more about the Jeju 4.3 Incident. It is not the intention
              of this site to argue for or against one political viewpoint nor
              is it the intention of this site to point blame upon any one
              person, group, or government. However, it is impossible to ignore
              the political viewpoints of the various actors involved in Jeju
              4.3. We will do our best to be neutrally factual and refrain from
              using accusatory language, and encourage visitors to reach their
              own conclusions about decisions made by the various parties.
            </p>
            <p>
              We hope that people who visit this site come away with more
              knowledge and understanding of this tragedy and how it continues
              to affect people in Jeju today.
            </p>
          </div>
          <div className={styles.pageSection}>
            <h2>Thank You and Credits</h2>
            <p>
              <Link href='http://jeju43peace.org/'>
                <a>Jeju 4.3 Peace Foundation</a>
              </Link>
            </p>
            <p>
              <Link href='http://www.43archives.or.kr/mobile/searchMain.do'>
                <a>Jeju 4.3 Archives</a>
              </Link>
            </p>
            <p>
              <Link href='http://www.jeju43.org/'>
                <a>Jeju 4.3 Research Center</a>
              </Link>
            </p>
            <p>
              <Link href='https://jejudarktours.org/en/'>
                <a>Jeju Dark Tours</a>
              </Link>
            </p>
            <p>
              <Link href='http://thejejumassacre.com'>
                <a>Darryl Coote (The Jeju Massacre)</a>
              </Link>
            </p>
            <p>
              If you{`'`}d like to read the government issued report on the Jeju
              4.3 Incident, you can find it here:
              <Link href='https://www.jeju43peace.or.kr/kor/sub01_01_01.do'>
                <a>Please visit here to read the report</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
