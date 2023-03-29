import { useTranslation } from '../../i18n';
import VideoList from '../../../components/video-list';
import VideoSearch from '../../../components/video-search';

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
  let videos = await getVideos();

  const search = async () => {
    videos = await getVideos();
  };

  return (
    <>
      <div className="grid gap-y-4">
        <VideoSearch />
        <VideoList videos={videos} />
      </div>
    </>
  );
}
