import Head from 'next/head';
import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Link from 'next/link'

const Product: FunctionComponent = () => { 
  const router = useRouter();
  useEffect(() => {
    fetch("http://localhost:3000/api/hello").then(response => response.json()).then(data => {
      console.log(data);
    });
  }, []);
  return (
    <div>
      <Head>
        <title>Product {router.query.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Product {router.query.id}</h1>
        <p><Link href="/shop">Назад</Link></p>
      </main>
    </div>
  );
}

export default Product;