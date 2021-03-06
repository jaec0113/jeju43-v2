import { GetStaticProps } from "next"
import { createClient } from "contentful"
import { IJeju43Fields, IJeju43 } from "../@types/generated/contentful"
import { v4 as uuidv4 } from "uuid"
import EventCard from "../components/EventCard"
import Layout from "../components/Layout"
import Header from "../components/Header"
import styles from "../styles/Home.module.scss"

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
  })

  const res = await client.getEntries({
    content_type: "jeju43",
  })

  return {
    props: {
      jeju43Events: res.items as IJeju43[],
    },
    revalidate: 1,
  }
}

export default function Index({ jeju43Events }: any) {
  return (
    <Layout
      title='Jeju 4.3 Incident Timeline'
      keywords='Jeju 4.3, Jeju 4.3 Incident, Jeju 4.3 Massacre, Jeju 4.3 Uprising, Jeju history, April 3, Jeju April 3, Jeju 4.3 Incident Timeline, Jeju 4.3 Timeline'
      description='See a timeline of events that occurred leading up to the Jeju 4.3 Incident and during the Jeju 4.3 Incident.'
    >
      <Header />
      <main>
        <div className={styles.centerContainer}>
          <div className={styles.eventList}>
            {jeju43Events.map((jeju43Event: IJeju43Fields) => (
              <EventCard key={uuidv4()} jeju43Event={jeju43Event} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}
