import styles from './styles.module.scss';

interface CardData {
    srcBgImage?: string,
    srcUserImage?: string,
    nameUser?: string,
    title?: string,
    paragraph?: string,
    gridArea?: any
}

export default function Card({
    srcBgImage,
    srcUserImage,
    nameUser,
    title,
    paragraph,
    gridArea
}: CardData) {
    return (
        <div 
            className={styles.Card}
            style={{
                backgroundImage: srcBgImage
            }}
        >
            <header className={styles.Header}>
                {/* <img
                    className={styles.ImageUser}
                /> */}
                <div className={styles.Column2}>
                    <h5>{ nameUser }</h5>
                    <span>Verified Graduate</span>
                </div>
            </header>
            <h3>
                { title }
            </h3>
            <q> { paragraph } </q>
        </div>
    )
}