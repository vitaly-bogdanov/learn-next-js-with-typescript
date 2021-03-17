import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

interface Props {
  message: string
}

const Product: NextPage<Props> = ({ message }) => { 
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Product {router.query.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Product {router.query.id}</h1>
        <p>{ message }</p>
        <p><Link href="/shop">Назад</Link></p>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  let response = await fetch("http://localhost:3000/api/hello");
  let data = await response.json();
  return { props: { message: data.message } }
}

export default Product;