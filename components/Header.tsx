import styles from "../styles/Components.module.scss"

type Props = {
  engTitle: string
  korTitle: string
}
export default function Header({ engTitle, korTitle }: Props) {
  return (
    <header className={styles.header}>
      <h1>{engTitle}</h1>
      <h2>{korTitle}</h2>
    </header>
  )
}

Header.defaultProps = {
  engTitle: "Jeju 4.3 Incident",
  korTitle: "제주 4.3 사건",
}
