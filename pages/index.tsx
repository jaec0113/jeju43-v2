import { GetStaticProps } from "next"
import Head from "next/head"
import { createClient } from "contentful"
import { IJeju43Fields, IJeju43 } from "../@types/generated/contentful"
import { v4 as uuidv4 } from "uuid"
import EventCard from "../components/EventCard"
import Layout from "../components/Layout"
import styles from "../styles/Home.module.scss"
import { randomUUID } from "crypto"

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
    <Layout>
      <Head>
        <title>Jeju 4.3 Incident Timeline</title>
        <meta name='keywords' content='Jeju, 4.3, Incident, Timeline' />
        <meta name='descriptions' content='Jeju 4.3 Incident Timeline' />
      </Head>
      <div className={styles.title}>
        <h1>Jeju 4.3 Incident</h1>
        <h2>제주 4.3 사건</h2>
      </div>
      <div className={styles.eventList}>
        {jeju43Events.map((jeju43Event: IJeju43Fields) => (
          <EventCard key={uuidv4()} jeju43Event={jeju43Event} />
        ))}
      </div>
    </Layout>
  )
}
