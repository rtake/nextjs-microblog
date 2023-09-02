import Head from "next/head";
import { ReactNode } from "react";
import styles from "./Layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "rtake";
export const siteTitle = "Next.js blog";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/images/profile.png" className={utilStyles.borderCircle} />
        <h1 className={utilStyles.padding1px}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
