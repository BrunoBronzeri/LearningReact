import HelloWorld from "./HelloWorld"
import styles from "./Frase.module.css"

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <HelloWorld />
            <p className={styles.fraseContent}>Vai todo mundo pro cacete!! -componente dois-</p>
        </div>
    )
}

export default Frase