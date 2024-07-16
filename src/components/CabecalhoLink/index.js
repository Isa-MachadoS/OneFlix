import { Link, useLocation } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

function CabecalhoLink({ url, children }) {
    const location = useLocation();

    return (
        <Link to={url} className={`${styles.link} ${url === location.pathname ? styles.active : ''}`}>
            {children}
        </Link>
    );
}

export default CabecalhoLink;
