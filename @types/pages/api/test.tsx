import type { NextApiRequest, NextApiResponse } from 'next';

const testEndpoint = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({ statusCode: 200, message: 'Test endpoint' });
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default testEndpoint;
