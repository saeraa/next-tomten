import styles from "@/styles/cardModal.module.scss";

export default function CardModal2({ showCardModal, handleCloseCardModal })
{
    if (!showCardModal)
        return null;

    return (
        <>
            <div className={styles.cardModalOverlay} onClick={handleCloseCardModal} />

            <div className={styles.cardModalContainer}>
                <button className={styles.closeBtn} onClick={handleCloseCardModal}>X</button>

                <form className={styles.cardModalForm}>
                    <div className={`${styles.cardModalSections} ${styles.cardModalSectionCard}`}>
                        <label htmlFor="cardNumber">Kortnummer</label>
                        <input id="cardNumber" type="number" placeholder="💳 0000 0000 0000 0000" required></input>
                    </div>

                    <div className={`${styles.cardModalSections} ${styles.cardModalSectionCVC}`}>
                        <label htmlFor="validTo">Giltig t.o.m</label>
                        <input id="validTo" type="number" placeholder="📅 MM / YY" required></input>
                    </div>

                    <div className={`${styles.cardModalSections} ${styles.cardModalSectionCVC}`}>
                        <label htmlFor="cvc">CVC kod</label>
                        <input id="cvc" type="number" placeholder="🔒 CVC" required></input>
                    </div>

                    <div className={`${styles.cardModalSections} ${styles.cardModalSectionName}`}>
                        <label htmlFor="name">Namn på kortet</label>
                        <input id="name" type="text" placeholder="🧟 Anna Andersson" required></input>
                    </div>

                    <div className={styles.cardModalBottomSection}>
                        <button type="submit">Lägg till kort</button>
                        <p>🔒 Your transaction is secured with SSL encryption</p>
                    </div>
                </form >
            </div >
        </>
    );
}