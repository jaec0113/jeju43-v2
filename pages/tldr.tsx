import Layout from "../components/Layout"
import styles from "../styles/Pages.module.scss"

export default function tldr() {
  return (
    <Layout
      title='Jeju 4.3 tl;dr | Jeju 4.3 Incident Website'
      keywords='Jeju 4.3, Jeju 4.3 Incident, Jeju 4.3 Massacre, Jeju 4.3 Uprising, Jeju history, April 3 Incident, Jeju April 3 Incident, Jeju 4.3 tldr'
      description='A brief overview of the Jeju 4.3 Incident. If you want a quick birds eye view to get started with learning about Jeju 4.3.'
    >
      <div className={styles.wrapper}>
        <header className={styles.pageHeader}>
          <h1>Jeju 4.3 Incident tl;dr</h1>
          <h3>제주4.3사건 짧게</h3>
        </header>
        <div className={styles.sidePageMenu}>
          <p className={styles.pageMenuLink}>What caused Jeju 4.3?</p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> | <br />
          </p>
          <p className={styles.pageMenuLink}>What was Jeju 4.3?</p>
          <p className={styles.pageMenuDash}>
            | <br /> | <br /> | <br />
          </p>
          <p className={styles.pageMenuLink}>What happened after 4.3 ended?</p>
        </div>
        <div className={styles.pageInfo}>
          <p className={styles.disclaimer}>
            <em>
              It is not recommended to try and understand the Jeju 4.3 Incident
              through a summarized form due to the large amount of complexities
              that are related to why it happened, what happened, and the
              aftermath. However, if you are trying to get a {`'`}birds eye view
              {`'`} of it before learning more, then you can start here.
            </em>
          </p>
          <div className={styles.pageSection}>
            <h3>What caused Jeju 4.3?</h3>
            <p>
              The Jeju 4.3 Incident was caused by a series of local issues:
              torture and harassment by the police (with no repercussions), a
              struggling economy, the re-emergence of pro-Japan policemen and
              officials, the increasing marginalization of local viewpoints in
              governance as well as the split of the country into North and
              South Korea nationally.
            </p>
          </div>
          <div className={styles.pageSection}>
            <h3>What was Jeju 4.3?</h3>
            <p>
              On April 3, 1948 armed members of the South Korea Labor Party Jeju
              branch attacked police stations and right wing militant groups in
              protest of local issues and national issues (see above). After a
              few months, the police and army began to ramp up the
              aggressiveness of the suppression methods used leading to the
              deaths of hundreds to thousands of civilians. In the fall/winter
              of 1948 and into early 1949, tens of thousands of Jeju civilians
              were killed in the name of suppressing and ending the (allegedly)
              communist armed resistance.
            </p>
          </div>
          <div className={styles.pageSection}>
            <h3>What happened after 4.3 ended?</h3>
            <p>
              The fighting in Jeju largely ended in June 1949 after the death of
              the second commander of the armed resistance, Lee Deokgu.
              Officially, Jeju 4.3 ended in 1954 when the ban on the entry to
              Halla Mountain was lifted. During that period (1949 - 1954) many
              hundreds to thousands more Jeju civilians were killed during the
              Korean War - again in the name of fighting communism. After that
              the government tried to sweep the Jeju 4.3 Incident {`'`}under the
              rug{`'`}. They were largely successful as a generation of Koreans
              grew up not knowing that such an event happened. In Jeju, the
              topic became incredibly taboo to speak of and doing brought swift
              consequences.
            </p>
            <p>
              The discovery of Darangshi Cave in 1991/1992 was one of the first
              major events that led to people learning about Jeju 4.3. In 1998,
              President Kim Daejung called for a special investigation into 4.3,
              and the National Assemby passed a law a year later in 1999 that
              would allow the government to begin investigating. That process
              began in 2003, and the same year President Roh Moohyeon became the
              first sitting president to apologize for the incident. President
              Moon Jaein did the same when he became president, and in 2019 the
              Defense Ministry and police also officially apologized for the
              incident as well. However, even today legal challenges and
              consequences to 4.3 are still being played out in the South Korean
              courts.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
