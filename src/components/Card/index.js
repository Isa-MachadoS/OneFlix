import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import iconeEditar from './editar.svg';
import iconeExcluir from './excluir.svg';
import { useState } from 'react';
import VideoEditForm from '../VideoEditForm';
import VideoPlayer from '../VideoPlayer';

function Card({ id, titulo, capa, categoria, link, descricao, onEdit, onDelete }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const [editMode, setEditMode] = useState(false);
    const [showPlayer, setShowPlayer] = useState(false);

    const ehFavorito = favorito.some((fav) => fav.id === id);
    const iconeFavorito = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    const handleFavoritar = () => {
        adicionarFavorito({ id, titulo, capa, categoria, link, descricao });
    };

    const handleEditar = () => {
        setEditMode(true);
        onEdit && onEdit({ id, titulo, capa, categoria, link, descricao });
    };

    const handleExcluir = () => {
        onDelete(id);
    };

    const handlePlay = () => {
        setShowPlayer(true);
    };

    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} onClick={handlePlay} />
            <h2>{titulo}</h2>
            <div className={styles.icons}>
                <img
                    src={iconeFavorito}
                    alt="Favoritar filme"
                    className={styles.icon}
                    onClick={handleFavoritar}
                />
                <div className={styles.iconesLinha}>
                    <img
                        src={iconeEditar}
                        alt="Editar filme"
                        className={styles.icon}
                        onClick={handleEditar}
                    />
                    <p>Editar</p>
                </div>
                <div className={styles.iconesLinha}>
                    <img
                        src={iconeExcluir}
                        alt="Excluir filme"
                        className={styles.icon}
                        onClick={handleExcluir}
                    />
                    <p>Excluir</p>
                </div>
            </div>
            {editMode && (
                <VideoEditForm
                    id={id}
                    titulo={titulo}
                    capa={capa}
                    categoria={categoria}
                    link={link}
                    descricao={descricao}
                    onSave={(updatedVideo) => {
                        onEdit(updatedVideo);
                        setEditMode(false);
                    }}
                    onCancel={() => setEditMode(false)}
                />
            )}
            {showPlayer && (
                <VideoPlayer
                    url={link}
                    title={titulo}
                    description={descricao}
                    onClose={() => setShowPlayer(false)}
                />
            )}
        </div>
    );
}

export default Card;







