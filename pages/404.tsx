import { FunctionComponent } from 'react';
import ClientLayout from '../layouts/ClientLayout';
import Link from 'next/link';
import styles from './404.module.scss';

const Error404: FunctionComponent = () => { 
  const title = 'Page not found';
  const description = 'Error 404';

  return (
    <ClientLayout title={title} description={description}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href="/"><span className={styles.linkToMainPage}>На главную</span></Link>
    </ClientLayout>
  );
}

export default Error404;