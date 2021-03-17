import { NextApiRequest, NextApiResponse } from 'next';

type TData = {

};

export default (req: NextApiRequest, res: NextApiResponse<TData | void>): void => {
  if (req.method === 'GET') {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
        .then(json => {
          res.status(200).json(json);
        });
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(); // Method Not Allowed
  }
};