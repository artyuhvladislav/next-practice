import Head from 'next/head';
import Link from 'next/link';

const MainLayout = ({ children, title }: any) => {
  return (
    <>
      <Head>
        <title>{title} page | next.js</title>
      </Head>
      <nav>
        <ul>
          <li>
            <Link href={'/about'}>about</Link>
          </li>
          <li>
            <Link href={'/content'}>content</Link>
          </li>
          <li>
            <Link href={'/post'}>post</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
