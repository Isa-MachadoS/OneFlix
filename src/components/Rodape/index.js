import styles from './Rodape.module.css';
import logoOneFlix from './logo.png';
import logoGitHub from './logo-github.png';
import logoLinkedin from './logo-linkedin.png'

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <img className={styles.logoOneFlix} src={logoOneFlix}/>
            <h2>Desenvolvido por Isadora Machado.</h2>
            <div className={styles.logos}>
                <a href='https://github.com/Isa-MachadoS'>
                    <img src={logoGitHub}/>
                </a>
                <a href='https://www.linkedin.com/in/isadora-machados/'>
                    <img src={logoLinkedin}/>
                </a>
            </div>
        </footer>
    )
}

export default Rodape;