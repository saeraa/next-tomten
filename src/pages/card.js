import { useState } from "react";
import CardModal from "@/components/cardModal/CardModal";

export default function Card()
{
    const [showCardModal, setShowCardModal] = useState(false);
    const [cardInfo, setCardInfo] = useState([])

    function onClose()
    {
        setShowCardModal(!showCardModal);

    };

    return (
        <div>
            <button onClick={onClose}>+ Lägg till nytt kort</button>
            <CardModal
                showCardModal={showCardModal}
                handleCloseCardModal={onClose}
                handleCard={(card) => setCardInfo([...cardInfo, card])}
            />
        </div>
    );
}

// This is just a placeholder for the booking site that will have the "+ Lägg till nytt kort" button that opens the card modal