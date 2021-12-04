import { createClient } from "contentful"
import Head from "next/head"
import EventCard from "../components/EventCard"
import Layout from "../components/Layout"
import styles from "../styles/Home.module.scss"
import React from "react"

interface IEventCard {}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
  })

  const res = await client.getEntries({ content_type: "jeju43" })

  return {
    props: {
      jeju43: res.items,
    },
    revalidate: 1,
  }
}

export default function Index({ jeju43 }) {
  return (
    <Layout>
      <div className={styles.title}>
        <h1>Jeju 4.3 Incident</h1>
        <h2>제주 4.3 사건</h2>
      </div>
    </Layout>
  )
}
