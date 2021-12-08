import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { createClient } from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { IJeju43Fields } from "../../@types/generated/contentful"
import { ParsedUrlQuery } from "querystring"
import Layout from "../../components/Layout"
import Header from "../../components/Header"

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
  // const {  } =

  return (
    <Layout title={`${jeju43Event.fields.event}  | Jeju 4.3 Incident Website`}>
      <Head>
        <meta
          name='keywords'
          content={`Jeju 4.3 Incident, Jeju 4.3 Massacre, Jeju 4.3 Uprising, Jeju 4.3, Jeju history, $`}
        />
        <meta
          name='descriptions'
          content={`Learn more about the history of the indcident that occurred during the Jeju 4.3 Incident.`}
        />
      </Head>
      <Header
        engTitle={`${jeju43Event.fields.event}`}
        korTitle={`${jeju43Event.fields.korTitle}`}
      />
      <div>{jeju43Event.fields.event}</div>
      <div>{documentToReactComponents(jeju43Event.fields.story)}</div>
    </Layout>
  )
}
