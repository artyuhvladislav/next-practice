import Link from 'next/link';
import { useRouter } from 'next/router';

export async function getServerSideProps({ params }: any) {
  const res = await fetch(`http://localhost:4200/posts/${params.id}`);
  const post = await res.json();
  console.log(post);
  return { props: { post } };
}

const Post = ({ post }: any) => {
  const { query } = useRouter();
  return (
    <div>
      <h2>Post {query.id}</h2>
      <p>{post.author}</p>
      <Link href={'/post'}>back to posts</Link>
    </div>
  );
};

export default Post;
