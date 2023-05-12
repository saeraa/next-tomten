export default function CardModal({ showCardModal, handleCloseCardModal })
{
    if (!showCardModal)
        return null;

    return (
        <div>
            <button onClick={handleCloseCardModal}>X</button>
            <form>
                <label htmlFor="cardNumber">Kortnummer</label>
                <input id="cardNumber"></input>
                <label htmlFor="validTo">Giltig t.o.m</label>
                <input id="validTo"></input>
                <label htmlFor="cvc">CVC kod</label>
                <input id="cvc"></input>
                <label htmlFor="name">Namn på kortet</label>
                <input id="name"></input>
                <button type="submit">Lägg till kort</button>
                <p>Your transaction is secured with SSL encryption</p>
            </form>
        </div>
    );
}