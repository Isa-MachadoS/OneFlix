import React, { useState } from "react";
import Banner from "components/Banner";
import VideoRow from "components/VideoRow";
import VideoEditForm from "components/VideoEditForm";
import { useFavoritoContext } from 'contextos/Favoritos';
import { useOutletContext } from "react-router-dom";
import styles from './Inicio.module.css';

function Inicio() {
    const [editVideo, setEditVideo] = useState(null);
    const { onSave, onEdit, onDelete, categoriasExistentes, videos } = useOutletContext();
    const { favorito } = useFavoritoContext();

    return (
        <>
            <Banner imagem="images/banner.png" />
            <div className={styles.container}>
                {categoriasExistentes.map(categoria => (
                    <VideoRow
                        key={categoria}
                        categoria={categoria}
                        videos={videos.filter(video => video.categoria === categoria)}
                        onEdit={setEditVideo}
                        onDelete={onDelete}
                    />
                ))}
                {favorito.length > 0 && (
                    <VideoRow
                        key="Favoritos"
                        categoria="Favoritos"
                        videos={favorito}
                        onEdit={(video) => setEditVideo(video)}
                        onDelete={onDelete}
                    />
                )}
                {editVideo && (
                    <VideoEditForm
                        video={editVideo}
                        onSave={(video) => {
                            onEdit(video);
                            setEditVideo(null);
                        }}
                        onCancel={() => setEditVideo(null)}
                    />
                )}
            </div>
        </>
    );
}

export default Inicio;
















