import Head from 'next/head';
import Router from 'next/router';
import MainLayout from '../../layout/MainLayout';

const About = () => {
  const linkClickHandler = (page: string) => Router.push(`/${page}`);
  return (
    <MainLayout title={'about'}>
      <h2>About page</h2>
      <button onClick={() => linkClickHandler('')}>go back to home</button>
      <button onClick={() => linkClickHandler('content')}>go back to content</button>
    </MainLayout>
  );
};

export default About;
