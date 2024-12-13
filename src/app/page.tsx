import Image from "next/image";
import styles from "./page.module.scss";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className={styles.page}>
     <Header/>
    </div>
  );
}
