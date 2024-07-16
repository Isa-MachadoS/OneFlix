import React from 'react';
import styles from './VideoRow.module.css';
import Card from '../Card';

const VideoRow = ({ categoria, videos = [], onEdit, onDelete }) => {
  return (
    <div className={styles['video-row']}>
      <h2>{categoria}</h2>
      <div className={styles['video-cards']}>
        {videos.map(video => (
          <Card key={video.id} {...video} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default VideoRow;



