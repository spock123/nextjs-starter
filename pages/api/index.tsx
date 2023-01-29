import { NextApiRequest, NextApiResponse } from 'next';

const rootEndpoint = (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ message: 'Hello World!' });
};

export default rootEndpoint;
