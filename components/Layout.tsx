import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface ILayout {
  title: string
  keywords: string
  description: string
  children: React.ReactNode
}

export default function Layout({
  title,
  keywords,
  description,
  children,
}: ILayout) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width' />
        <meta charSet='utf-8' />
        <meta property='og:title' content={title} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
        <meta property='keywords' content={keywords} key='keywords' />
        <title>{title}</title>
      </Head>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: "Jeju 4.3 Incident",
  keywords: "Jeju, Jeju 4.3, Jeju 4.3 Incident, Jeju 4.3 Incident Massacre",
  description:
    "Beginning on March 1, 1947 and lasting until September 1, 1954. The Jeju 4.3 Incident left tens of thousands of Jeju people dead and scars on the island that last until today.",
}
