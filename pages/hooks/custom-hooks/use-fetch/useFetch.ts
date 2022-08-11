import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('something wrong, çould not connect to resource');
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .then(() => {
        setError('');
      })
      .catch((error) => {
        console.warn(`sorry an error occurred, due to ${error.message} `);
        setData(null);
        setError(error.message);
      });
  }, [url]);
  return [data, error];
};

export default useFetch;
