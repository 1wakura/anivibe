import styles from './VideoPlayer.module.scss';

const VideoPlayer = ({ alternative_player }) => {
  if (!alternative_player) {
    return null;
  }

  return (
    <div id="playerjs" className={styles.videoPlayer}>
      <iframe
        src={`${alternative_player ? alternative_player : ''}`}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ height: '700px' }}
        allowFullScreen={true}></iframe>
    </div>
  );
};

export default VideoPlayer;