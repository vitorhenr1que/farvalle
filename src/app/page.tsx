import Image from "next/image";
import styles from "./page.module.scss";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Maintenance } from "./components/Maintenance";

export default function Home() {
  const isProduction = process.env.NEXT_PUBLIC_VERSION === "production"
  return isProduction ? (
    <div className={styles.page}>
     <Header/>
     <Main/>
    </div>
  ) : (
    <Maintenance/>
  )
}