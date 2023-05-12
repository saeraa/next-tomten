import { useState } from "react";
import CardModal from "@/components/cardModal/CardModal";

export default function Card()
{
    const [showCardModal, setShowCardModal] = useState(false);

    function onClose()
    {
        setShowCardModal(false);

    };

    return (
        <div>
            <button onClick={() => { setShowCardModal(true) }}>+ Lägg till nytt kort</button>
            <CardModal
                showCardModal={showCardModal}
                handleCloseCardModal={onClose}
            />
        </div>
    );
}