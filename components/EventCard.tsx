import Link from "next/link"
import Image from "next/image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { IJeju43Fields } from "../@types/generated/contentful"
import styles from "../styles/Components.module.scss"

export default function BlogCard({ jeju43Event }: IJeju43Fields) {
  const { event, date, region, background, eventImage, slug } =
    jeju43Event.fields
  return (
    <div className={styles.cardWrapper}>
      <h3 className={styles.eventTitle}>
        {event}, {region}
      </h3>
      <Image
        src={`https:${eventImage.fields.file.url}`}
        alt={eventImage.fields.title}
        height={200}
        width={200}
      />
      <div>
        <h4 className={styles.eventInfo}>{date}</h4>
        <div className={styles.eventInfo}>
          {documentToReactComponents(background)}
        </div>
        <Link href={`/events/${slug}`} passHref>
          <a className={styles.eventLink}>Read More</a>
        </Link>
      </div>
    </div>
  )
}
