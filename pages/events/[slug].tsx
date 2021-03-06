import { GetStaticPaths, GetStaticProps } from "next"
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
  const {
    event,
    korTitle,
    date,
    region,
    story,
    eventImage,
    actors,
    imageCredit,
  } = jeju43Event.fields

  return (
    <Layout
      title={`${event} | Jeju 4.3 Incident Website`}
      keywords={`Jeju 4.3 Incident, Jeju 4.3 Massacre, Jeju 4.3 Uprising, Jeju 4.3, Jeju history, ${event}`}
      description={`Learn more about the history of the incidents that occurred during the Jeju 4.3 Incident. Read about the ${event} incident.`}
    >
      <Header engTitle={`${event}`} korTitle={`${korTitle}`} />
      <div
        className={styles.eventWrapper}
        style={{ backgroundImage: `url(${eventImage.fields.file.url})` }}
      >
        <div className={styles.eventCard}>
          <BackButton />
          <div className={styles.eventInfo}>
            <h1 className={styles.eventName}>{event}</h1>
            <p className={styles.eventDate}>
              {date}, {region}
            </p>
            <h3>Actors Involved</h3>
            <div className={styles.eventActors}>
              {documentToReactComponents(actors)}
            </div>
            <h3>Story</h3>
            <div className={styles.eventStory}>
              {documentToReactComponents(story)}
            </div>
            <h3>Image Credit</h3>
            <p>{imageCredit}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
