import React from 'react';
import ReactPlayer from 'react-player';
import { FaTimes } from 'react-icons/fa';
import styles from './VideoPlayer.module.css';

function VideoPlayer({ url, title, description, onClose }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.playerWrapper}>
                <ReactPlayer url={url} controls playing className={styles.reactPlayer} />
                <div className={styles.info}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
                <button onClick={onClose} className={styles.closeButton}>
                    <FaTimes className={styles.closeIcon} />
                </button>
            </div>
        </div>
    );
}

export default VideoPlayer;


