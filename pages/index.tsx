import Layout from "@/components/Layout";
import { PostData, getPostsData } from "@/lib/post";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React from "react";
import utilStyle from "../styles/utils.module.css";

interface HomeProps {
  allPostsData: PostData[];
}

export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

const Home: React.FC<HomeProps> = ({ allPostsData }) => {
  return (
    <Layout home>
      <section className={`${utilStyle.headingMd}`}>
        <p>ひまじんエンジニアです</p>
      </section>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
                <h1 className={utilStyle.boldText}>{title}</h1>
              </Link>
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
