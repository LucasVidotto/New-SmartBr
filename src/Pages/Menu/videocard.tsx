import React, { useState } from 'react';

interface VideoCardProps {
  coverImage: string;
  videoUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ coverImage, videoUrl }) => {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  const extractVideoIdFromUrl = (url: string) => {
    const urlParams = new URLSearchParams(url);
    return urlParams.get('v') || '';
  };

  const videoId = extractVideoIdFromUrl(videoUrl);

  return (
    <>
      <div className="video-card" onClick={openVideo}>
        <img src={coverImage} alt="Capa do vídeo" />
        <div className="play-button"></div>
      </div>

      {showVideo && (
        <div className="popup-container">
          <div className="popup">
            <span className="close" onClick={closeVideo}>&times;</span>
            <iframe
              title="Vídeo"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
