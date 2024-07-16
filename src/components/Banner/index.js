import { useState, useEffect } from 'react';
import styles from './Banner.module.css';

function Banner() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = ['/imagens/capa-one-piece1.png', '/imagens/capa-serie.png'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000); // Troca a cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.banner}>
            <div className={styles.overlay}></div>
            <img className={styles.capa} src={images[currentImage]} alt="Banner" />
            <div className={styles.texto}>
                <h2>Texto sobre a imagem</h2>
                <p>Descrição do texto sobre a imagem.</p>
            </div>
        </div>
    );
}

export default Banner;
