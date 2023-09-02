import Head from "next/head";
import Link from "next/link";

const firstPost = () => {
  return (
    <div>
      <Head>
        <title>First post</title>
      </Head>
      <h1>最初の投稿</h1>
      <Link href="/">
        <h2>ホームへ戻る</h2>
      </Link>
    </div>
  );
};

export default firstPost;
