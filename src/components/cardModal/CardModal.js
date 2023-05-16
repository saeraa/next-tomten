import styles from "@/styles/cardModal.module.scss";
import { useState, useContext } from "react";
import { LoggedInContext } from "@/pages/_app";


async function sendCardInfo(userName, cardInfo)
{
    const resp = await fetch('/api/users/addcard', {
        "method": "PATCH",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "userName": userName,
            "paymentMethods": cardInfo
        })
    })
}

export default function CardModal2({ showCardModal, handleCloseCardModal, handleCard })
{
    const [cardInfo, setCardInfo] = useState({ "cardNr": '', "validTo": '', "CVC": '', "nameOnCard": '' })
    const { isLoggedIn, setIsLoggedIn, username, setUsername } = useContext(LoggedInContext);


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

                    if (isLoggedIn)
                        sendCardInfo(username, cardInfo);

                    handleCloseCardModal();
                }}>
                    <div className={`${styles.cardModalSections} ${styles.cardModalSectionCard}`}>
                        <label htmlFor="cardNumber">Kortnummer</label>
                        <input id="cardNumber" type="tel" name="cardNumber" value={cardInfo.cardNr} onChange={(e) => setCardInfo({ ...cardInfo, "cardNr": e.target.value })}
                            pattern='[\d| ]{16,22}'
                            maxLength='19' placeholder="💳 0000 0000 0000 0000" required></input>
                    </div>

                    <div className={`${styles.cardModalSections} ${styles.cardModalSectionCVC}`}>
                        <label htmlFor="validTo">Giltig t.o.m</label>
                        <input id="validTo" type="tel" name="validTo" value={cardInfo.validTo} onChange={(e) => setCardInfo({ ...cardInfo, "validTo": e.target.value })} pattern='\d\d/\d\d' placeholder="📅 MM / YY" required></input>
                    </div>

                    <div className={`${styles.cardModalSections} ${styles.cardModalSectionCVC}`}>
                        <label htmlFor="cvc">CVC kod</label>
                        <input id="cvc" type="number" name="cvc" value={cardInfo.CVC} onChange={(e) => setCardInfo({ ...cardInfo, "CVC": e.target.value })} placeholder="🔒 CVC" pattern='\d{3}' required></input>
                    </div>

                    <div className={`${styles.cardModalSections} ${styles.cardModalSectionName}`}>
                        <label htmlFor="nameOnCard">Namn på kortet</label>
                        <input id="nameOnCard" type="text" name="nameOnCard" value={cardInfo.nameOnCard} onChange={(e) => setCardInfo({ ...cardInfo, "nameOnCard": e.target.value })} placeholder="🧟 Anna Andersson" pattern='[a-z A-Z-]+' required></input>
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