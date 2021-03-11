// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

type TData = {
  message: String
}

export default (req: NextApiRequest, res: NextApiResponse<TData | void>): void => {
  if (req.method === 'POST') {
    res.status(200).json({ message: __filename });
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(); // Method Not Allowed
  }
}