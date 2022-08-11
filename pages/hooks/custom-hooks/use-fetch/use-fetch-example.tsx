import { Frame } from '@/components';
import useFetch from './useFetch';
import Image from 'next/image';

const useFetchComponent = () => {
  const [data, error] = useFetch('https://dog.ceo/api/breeds/image/random');
  return (
    <Frame title="useFetch">
      <>
        {error && <p>Error: {error}</p>}

        {data && (
          <Image
            src={(data as any).message}
            layout="responsive"
            placeholder="empty"
            alt="this is a dog"
            width={700}
            height={475}
          />
        )}
      </>
    </Frame>
  );
};

export default useFetchComponent;
