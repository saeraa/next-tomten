import { useState } from "react";
import CardModal from "@/components/cardModal/CardModal";

export default function Card()
{
    const [showCardModal, setShowCardModal] = useState(false);

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
            />
        </div>
    );
}