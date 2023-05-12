import styles from "@/styles/cardModal.module.scss";
import { useState } from "react";

export default function CardModal2({ showCardModal, handleCloseCardModal, handleCard })
{
    const [cardInfo, setCardInfo] = useState({ cardNr: '', validTo: '', CVC: '', nameOnCard: '' })

    if (!showCardModal)
        return null;

    return (
        <>
            <div className={styles.cardModalOverlay} onClick={handleCloseCardModal} />

            <div className={styles.cardModalContainer}>
                <button className={styles.closeBtn} onClick={handleCloseCardModal}>X</button>

                <form className={styles.cardModalForm} onSubmit={(ev) =>
                {
                    ev.preventDefault();
                    handleCard(cardInfo);
                }}>
                    <div className={`${styles.cardModalSections} ${styles.cardModalSectionCard}`}>
                        <label htmlFor="cardNumber">Kortnummer</label>
                        <input id="cardNumber" type="number" name="cardNumber" value={cardInfo.cardNr} onChange={(e) => setCardInfo({ ...cardInfo, cardNr: e.target.value })} placeholder="💳 0000 0000 0000 0000" required></input>
                    </div>

                    <div className={`${styles.cardModalSections} ${styles.cardModalSectionCVC}`}>
                        <label htmlFor="validTo">Giltig t.o.m</label>
                        <input id="validTo" type="number" name="validTo" value={cardInfo.validTo} onChange={(e) => setCardInfo({ ...cardInfo, validTo: e.target.value })} placeholder="📅 MM / YY" required></input>
                    </div>

                    <div className={`${styles.cardModalSections} ${styles.cardModalSectionCVC}`}>
                        <label htmlFor="cvc">CVC kod</label>
                        <input id="cvc" type="number" name="cvc" value={cardInfo.CVC} onChange={(e) => setCardInfo({ ...cardInfo, CVC: e.target.value })} placeholder="🔒 CVC" required></input>
                    </div>

                    <div className={`${styles.cardModalSections} ${styles.cardModalSectionName}`}>
                        <label htmlFor="nameOnCard">Namn på kortet</label>
                        <input id="nameOnCard" type="text" name="nameOnCard" value={cardInfo.nameOnCard} onChange={(e) => setCardInfo({ ...cardInfo, nameOnCard: e.target.value })} placeholder="🧟 Anna Andersson" required></input>
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