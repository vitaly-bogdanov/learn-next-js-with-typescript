import { FunctionComponent } from 'react';
import ClientLayout from '../layouts/ClientLayout';

const Error404: FunctionComponent = () => { 
  const title = 'Page not found';
  const description = 'Error 404';

  return (
    <ClientLayout title={title} description={description}>
      <h2>{title}</h2>
      <p>{description}</p>
    </ClientLayout>
  );
}

export default Error404;