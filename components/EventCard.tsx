import Link from "next/link"
import Image from "next/image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { IJeju43Fields } from "../@types/generated/contentful"
import styles from "../styles/EventCard.module.scss"

export default function BlogCard({ jeju43Event }: IJeju43Fields) {
  console.log(jeju43Event)
  const { event, date, region, background, eventImage } = jeju43Event.fields
  return (
    <div className={styles.cardWrapper}>
      <Image
        src={`https:${eventImage.fields.file.url}`}
        alt={eventImage.fields.title}
        height={100}
        width={100}
      />
      <div className={styles.eventInfo}>
        <h3>
          {event}, {region}
        </h3>
        <h4>{date}</h4>
        <div>{documentToReactComponents(background)}</div>
      </div>
    </div>
  )
}
