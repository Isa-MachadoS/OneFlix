import React, { useState } from 'react';
import styles from './VideoEditForm.module.css';
import { FaTimes } from 'react-icons/fa';

const VideoEditForm = ({ video = {}, onSave, onCancel }) => {
    const [titulo, setTitulo] = useState(video.titulo || '');
    const [categoria, setCategoria] = useState(video.categoria || '');
    const [capa, setCapa] = useState(video.capa || '');
    const [link, setLink] = useState(video.link || '');
    const [descricao, setDescricao] = useState(video.descricao || '');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({
            ...video,
            titulo,
            categoria,
            capa,
            link,
            descricao
        });
    };

    return (
        <div className={styles.formOverlay}>
            <div className={styles.formContainer}>
                <button onClick={onCancel} className={styles.closeButton}>
                    <FaTimes className={styles.closeIcon} />
                </button>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Editar Vídeo:</h2>
                    <label>
                        Título:
                        <input
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </label>
                    <label>
                        Categoria:
                        <input
                            type="text"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        />
                    </label>
                    <label>
                        Capa (URL):
                        <input
                            type="text"
                            value={capa}
                            onChange={(e) => setCapa(e.target.value)}
                        />
                    </label>
                    <label>
                        Link do Vídeo:
                        <input
                            type="text"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </label>
                    <label>
                        Descrição:
                        <textarea
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </label>
                    <div className={styles.buttons}>
                        <button type="submit">Guardar</button>
                        <button type="button" onClick={onCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VideoEditForm;





