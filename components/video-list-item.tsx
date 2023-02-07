export default function VideoListItem(props: { video: any }) {
  const { video } = props;
  return (
    <div key={video.id.videoId}>
      <h1>{video.snippet.title}</h1>
      {video.snippet.thumbnails && (
        <img
          src={video.snippet.thumbnails.default.url}
          alt="test"
          className="w-full h-auto rounded-xl"
        />
      )}
    </div>
  );
}
