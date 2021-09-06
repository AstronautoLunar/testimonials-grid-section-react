import styles from './styles.module.scss';

interface CardData {
    srcBgImage?: string,
    srcUserImage: string,
    nameUser: string,
    altUser: string,
    title: string,
    paragraph: string,
    idGridArea: any,
    backgroundColor: string
}

export default function Card({
    srcBgImage,
    srcUserImage,
    nameUser,
    altUser,
    title,
    paragraph,
    idGridArea,
    backgroundColor
}: CardData) {
    let valueConvertedBG = function (backgroundColor: string) {
        switch(backgroundColor) {
            case "var(--moderate-violet)":
            case "var(--very-dark-grayish-blue)":
            case "var(--very-dark-blackish-blue)":
                return {
                    color: "var(--white)"
                };
            default:
                return {
                    color: "var(--very-dark-blackish-blue)"
                }
        }
    }

    return (
        <div 
            id={styles[idGridArea]}
            className={styles.Card}
            style={{
                backgroundImage: `url(${srcBgImage})`,
                backgroundColor
            }}
        >
            <header className={styles.Header}>
                <img
                    className={styles.ImageUser}
                    src={srcUserImage}
                    alt={altUser}
                />
                <div className={styles.column}>
                    <h5
                        style={valueConvertedBG(backgroundColor)}
                        >{ nameUser }</h5>
                    <span
                        style={valueConvertedBG(backgroundColor)}
                    >Verified Graduate</span>
                </div>
            </header>
            <article className={styles.article}>
                <h3
                    style={valueConvertedBG(backgroundColor)}
                >
                    { title }
                </h3>
                <q
                    style={valueConvertedBG(backgroundColor)}
                > { paragraph } </q>
            </article>
        </div>
    )
}