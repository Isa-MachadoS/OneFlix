import React, { useState } from 'react';
import Titulo from 'components/Titulo';
import styles from './FormNovoVideo.module.css';
import ListaSuspensa from 'components/ListaSuspensa';
import Campo from 'components/Campo';

function FormNovoVideo({ onSave, categoriasExistentes }) {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [novaCategoria, setNovaCategoria] = useState('');
    const [capa, setCapa] = useState('');
    const [link, setLink] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const categoriaFinal = novaCategoria || categoria;
        onSave({ id: Date.now(), titulo, categoria: categoriaFinal, capa, link, descricao });
    };

    return (
        <>
            <div className={styles.titulos}>
                <Titulo>
                    <h1>Adicione um novo vídeo</h1>
                </Titulo>
                <h2 className={styles.subtitulo}>Complete o formulário para criar um novo card de vídeo.</h2>
            </div>
            <form className={styles.FormNovoVideo} onSubmit={handleSubmit}>
                <div className={styles.primeiraFila}>
                    <Campo
                        obrigatorio={true}
                        label='Título'
                        placeholder='Digite o título do vídeo'
                        valor={titulo}
                        aoAlterado={valor => setTitulo(valor)}
                    />
                    <ListaSuspensa
                        obrigatorio={true}
                        label='Categoria'
                        itens={categoriasExistentes}
                        valor={categoria}
                        aoAlterado={valor => setCategoria(valor)}
                    />
                    {categoria === 'nova' && (
                        <input
                            className={styles.Barra}
                            type="text"
                            placeholder="Crie uma nova categoria"
                            value={novaCategoria}
                            onChange={(e) => setNovaCategoria(e.target.value)}
                        />
                    )}
                </div>
                <div className={styles.segundaFila}>
                    <Campo
                        obrigatorio={true}
                        label='Capa URL'
                        placeholder='Ex: https://img.youtube.com/vi/xxxxxxxxxx.jpg'
                        valor={capa}
                        aoAlterado={valor => setCapa(valor)}
                    />
                    <Campo
                        obrigatorio={true}
                        label='Link'
                        placeholder='Digite o link do seu vídeo'
                        valor={link}
                        aoAlterado={valor => setLink(valor)}
                    />
                </div>
                <textarea
                    className={styles.BarraDescricao}
                    placeholder='Descreva seu vídeo aqui'
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <button type="submit">Salvar</button>
            </form>
        </>
    );
}

export default FormNovoVideo;













