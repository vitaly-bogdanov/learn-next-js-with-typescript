import { PropsWithChildren, FunctionComponent, ElementRef } from 'react';
import Head from 'next/head';

type Props = {
  title: string
  description: string
  keywords?: string
};

const ClientLayout: FunctionComponent<PropsWithChildren<Props>> = ({title, description, keywords, children}) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
    </Head>
    <header>
      <nav>
        <h1>NAVIGATION</h1>
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <h1>FOOTER</h1>
    </footer>
  </>
);

export default ClientLayout;