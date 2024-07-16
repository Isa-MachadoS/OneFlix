import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="/">
                <img src={logo} alt="Logo do oneflix"></img>
            </Link>
            <nav className={styles.navegacao}>
                <div>
                    <CabecalhoLink url="/">
                        HOME
                    </CabecalhoLink>
                </div>
                <div>
                    <CabecalhoLink url="/novo-video">
                        NOVO VÍDEO
                    </CabecalhoLink>
                </div>
            </nav>
        </header>
    )
}

export default Cabecalho;
