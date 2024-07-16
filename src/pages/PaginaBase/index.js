import React, { useEffect, useState } from "react";
import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet, useNavigate } from "react-router-dom";

function PaginaBase() {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Isa-MachadoS/AluraFlix-API/videos')
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data)) {
                    setVideos(data);
                    const categoriasUnicas = [...new Set(data.map(video => video.categoria))];
                    setCategorias(categoriasUnicas);
                }
            })
            .catch(error => {
                console.error("Erro ao buscar vídeos:", error);
                setVideos([]);
                setCategorias([]);
            });
    }, []);

    const handleSaveVideo = (novoVideo) => {
        setVideos([...videos, novoVideo]);
        if (!categorias.includes(novoVideo.categoria)) {
            setCategorias([...categorias, novoVideo.categoria]);
        }
        navigate('/');
    };

    const handleEditVideo = (videoAtualizado) => {
        setVideos(videos.map(video => video.id === videoAtualizado.id ? videoAtualizado : video));
    };

    const handleDeleteVideo = (videoId) => {
        const novosVideos = videos.filter(video => video.id !== videoId);
        setVideos(novosVideos);
        const categoriasAtuais = [...new Set(novosVideos.map(video => video.categoria))];
        setCategorias(categoriasAtuais);
    };

    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet context={{ onSave: handleSaveVideo, onEdit: handleEditVideo, onDelete: handleDeleteVideo, categoriasExistentes: categorias, videos }} />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    );
}

export default PaginaBase;















