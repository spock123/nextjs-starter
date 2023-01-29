import { NextApiRequest, NextApiResponse } from 'next';

const cache = new Map();

export const getVideosEndpoint = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    let result = null;
    const { YOUTUBE_KEY, YOUTUBE_URL } = process.env;
    const { q = '', maxResults = 5 } = req.query;

    const query = `part=snippet&maxResults=${maxResults}&q=${q}`;

    if (cache.has(query)) {
      console.log('cache hit');
      result = cache.get(query);
      res.json(result);
      return;
    }

    console.log('cache miss');
    const url = `${YOUTUBE_URL}/search?${query}&key=${YOUTUBE_KEY}`;
    result = await (await fetch(url)).json();
    cache.set(query, result);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};
