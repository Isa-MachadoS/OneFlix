import styles from './ListaSuspensa.module.css';

function ListaSuspensa({ label, aoAlterado, valor, obrigatorio = false, itens, placeholder }) {
    return (
        <div className={styles.listaSuspensa}>
            <label>{label}</label>
            <select
                className={styles.campoInput}
                placeholder={placeholder}
                onChange={evento => aoAlterado(evento.target.value)}
                required={obrigatorio}
                value={valor}
            >
                <option className={styles.opcoes} value="">Selecione uma categoria...</option>
                {itens.map(item => <option key={item} value={item}>{item}</option>)}
                <option value="nova">Criar nova categoria...</option>
            </select>
        </div>
    );
}

export default ListaSuspensa;


