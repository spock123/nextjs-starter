import VideoListItem from './video-list-item';

const VideoList = (props: { videos: any }) => {
  const { videos } = props;
  return (
    <>
      {videos && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {props.videos.map((video: any) => (
            <VideoListItem video={video} key={video.id.videoId} />
          ))}
        </div>
      )}
    </>
  );
};

export { VideoList as default };
