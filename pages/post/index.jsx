import Link from 'next/link';

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:4200/posts`);
  const posts = await res.json();
  return { props: { posts } };
}

const Posts = ({ posts }) => {
  return (
    <div>
      <h2>Posts pages</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${encodeURIComponent(post.id)}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
