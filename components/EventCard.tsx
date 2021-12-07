import Link from "next/link"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { IJeju43Fields } from "../@types/generated/contentful"
import styles from "../styles/EventCard.module.scss"

export default function BlogCard({ jeju43Event }: IJeju43Fields) {
  const { event, region, background } = jeju43Event.fields
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.eventInfo}>
        <h3>{event}</h3>
        <h4>{region}</h4>
        <div>{documentToReactComponents(background)}</div>
      </div>
    </div>
  )
}
