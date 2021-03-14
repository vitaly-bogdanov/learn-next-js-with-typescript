import { FunctionComponent } from 'react';
import Link from 'next/link';
import ClientLayout from '../../layouts/ClientLayout';
import styles from './Shop.module.scss';


const Shop: FunctionComponent = () => (
  <ClientLayout title="Test title" description="Test description" keywords="Test keywords">
    <h1 className={styles.fontTest}>HOHOHOOHOH</h1>
    <p><Link href="/shop/1">1</Link></p>
    <p><Link href="/shop/2">2</Link></p>
    <p><Link href="/shop/3">3</Link></p>
  </ClientLayout>
);

export default Shop;