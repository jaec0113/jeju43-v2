import Link from "next/link"
import Image from "next/image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { IJeju43Fields } from "../@types/generated/contentful"
import styles from "../styles/EventCard.module.scss"

export default function BlogCard({ jeju43Event }: IJeju43Fields) {
  const { event, date, region, background, eventImage, slug } =
    jeju43Event.fields
  return (
    <div className={styles.cardWrapper}>
      <div>
        <Image
          src={`https:${eventImage.fields.file.url}`}
          alt={eventImage.fields.title}
          height={200}
          width={200}
        />
      </div>
      <div className={styles.eventInfo}>
        <Link href={`/events/${slug}`} passHref>
          <a>
            <h3>
              {event}, {region}
            </h3>
          </a>
        </Link>
        <h4>{date}</h4>
        <div>{documentToReactComponents(background)}</div>
      </div>
    </div>
  )
}
