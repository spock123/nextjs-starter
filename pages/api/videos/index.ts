import { NextApiRequest, NextApiResponse } from 'next';
import { getVideosEndpoint } from '@/server/videos';

const videosEndpoint = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;

    switch (method) {
      case 'GET': {
        getVideosEndpoint(req, res);
        break;
      }
      case 'POST': {
        res.json({ status: 'not implemented yet' });
        break;
      }

      default: {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export default videosEndpoint;
