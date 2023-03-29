import { IVideo } from '@types';
export default function VideoListItem(props: { video: IVideo }) {
  const { video } = props;
  return (
    <div key={video.id.videoId}>
      <h1>{video.snippet.title}</h1>
      {video.snippet.thumbnails && (
        <img
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
          className="w-full h-auto rounded-xl"
        />
      )}
    </div>
  );
}
