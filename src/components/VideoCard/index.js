import React from 'react';
import styles from './VideoCard.module.css';
import { useFavoritoContext } from 'contextos/Favoritos';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import iconeEditar from './editar.svg';
import iconeExcluir from './excluir.svg';

const VideoCard = ({ video, onEdit, onDelete }) => {
    const { favorito, adicionarFavorito } = useFavoritoContext();

    const ehFavorito = favorito.some((fav) => fav.id === video.id);
    const iconeFavorito = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    const handleFavoritar = () => {
        adicionarFavorito(video);
    };

    const handleEditar = () => {
        onEdit(video);
    };

    const handleExcluir = () => {
        onDelete(video.id);
    };

    return (
        <div className={styles['video-card']}>
            <a href={video.link} target="_blank" rel="noopener noreferrer" className={styles['video-card-link']}>
                <img src={video.capa} alt={video.titulo} className={styles['video-card-img']}></img>
            </a>
            <h3 className={styles['video-card-title']}>{video.titulo}</h3>
            <div className={styles.icons}>
                <img
                    src={iconeFavorito}
                    alt="Favoritar filme"
                    className={styles.icon}
                    onClick={handleFavoritar}
                />
                <img
                    src={iconeEditar}
                    alt="Editar filme"
                    className={styles.icon}
                    onClick={handleEditar}
                />
                <img
                    src={iconeExcluir}
                    alt="Excluir filme"
                    className={styles.icon}
                    onClick={handleExcluir}
                />
            </div>
            <p className={styles['video-card-description']}>{video.descricao}</p>
        </div>
    );
};

export default VideoCard;


