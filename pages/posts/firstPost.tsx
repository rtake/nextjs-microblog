import Link from "next/link";

const firstPost = () => {
  return (
    <div>
      <h1>最初の投稿</h1>
      <Link href="/">
        <h2>ホームへ戻る</h2>
      </Link>
    </div>
  );
};

export default firstPost;
