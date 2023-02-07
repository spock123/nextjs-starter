import Link from 'next/link';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { Trans } from 'react-i18next/TransWithoutContext';
import { useTranslation } from '../../i18n';
import VideoListItem from '../../../components/video-list-item';

const getVideos = async (): Promise<any> => {
  try {
    const res = await fetch('http://localhost:3000/api/videos');
    const data = await res.json();
    return data?.items || [];
  } catch (err) {
    throw err;
  }
};

interface IProps {
  params: {
    lang: string;
  };
}

export default async function VideoPage(props: IProps) {
  let { lang } = props.params;
  const { t } = await useTranslation(lang);
  const videos = await getVideos();

  return (
    <>
      <h1>Videos</h1>
      {videos && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {videos.map((video: any) => (
            <VideoListItem video={video} key={video.id.videoId} />
          ))}
        </div>
      )}
    </>
  );
}
