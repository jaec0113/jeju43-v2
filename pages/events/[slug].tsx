import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { createClient } from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { IJeju43Fields } from "../../@types/generated/contentful"
import { ParsedUrlQuery } from "querystring"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import { BackButton } from "../../components/Buttons"
import styles from "../../styles/EventPage.module.scss"

interface IParams extends ParsedUrlQuery {
  slug: string
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
})

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "jeju43",
  })

  const paths = res.items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams
  const res = await client.getEntries({
    content_type: "jeju43",
    "fields.slug": slug,
  })

  return {
    props: { jeju43Event: res.items[0] },
    revalidate: 10,
  }
}

export default function EventStory({ jeju43Event }: IJeju43Fields) {
  const { event, korTitle, story, eventImage, actors } = jeju43Event.fields
  console.log(eventImage)
  return (
    <Layout title={`${event} | Jeju 4.3 Incident Website`}>
      <Head>
        <meta
          name='keywords'
          content={`Jeju 4.3 Incident, Jeju 4.3 Massacre, Jeju 4.3 Uprising, Jeju 4.3, Jeju history, ${event}`}
        />
        <meta
          name='descriptions'
          content={`Learn more about the history of the indcident that occurred during the Jeju 4.3 Incident. Read about the ${event} incident.`}
        />
      </Head>
      <Header engTitle={`${event}`} korTitle={`${korTitle}`} />
      <div
        className={styles.eventWrapper}
        style={{ backgroundImage: `url(${eventImage.fields.file.url})` }}
      >
        <div className={styles.eventCard}>
          <BackButton />
          <div className={styles.eventInfo}>
            <h1 className={styles.eventName}>{event}</h1>
            <h3>Actors Involved</h3>
            <div>{documentToReactComponents(actors)}</div>
            <h3>Story</h3>
            <div className={styles.eventStory}>
              {documentToReactComponents(story)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
