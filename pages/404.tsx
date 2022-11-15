import Link from 'next/link';
import s from '../styles/error.module.css';

const Error = () => {
  return (
    <div>
      <h1 className={s.error}>Error...</h1>
      <Link href={'/'}>go to home</Link>
    </div>
  );
};

export default Error;
