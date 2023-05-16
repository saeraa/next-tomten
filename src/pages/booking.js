import styles from "@/styles/booking.module.scss";
import { useState } from "react";

export default function Booking()
{
    // Mock data to be removed when real data is fixed
    let title = "Blade"
    let date = "2023-06-24"
    let time = "14:30"
    let salong = "Alcazar"
    let lenght = "120"
    let imageURL = "https://m.media-amazon.com/images/M/MV5BOTk2NDNjZWQtMGY0Mi00YTY2LWE5MzctMGRhZmNlYzljYTg5XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg"

    const [adultPrice, setAdultPrice] = useState(150);
    const [childPrice, setChildPrice] = useState(100);
    const [adultTickets, setAdultTickets] = useState(0);
    const [childTickets, setChildTickets] = useState(0);

    const ticketSum = (adultPrice * adultTickets) + (childPrice * childTickets);

    function checkInterval(value)
    {
        return (value >= 0 && value <= 30);
    }

    return (
        <>
            <section className={styles["movie-details"]}>
                <div>
                    <h1 className={styles["movie-title"]}>Boka biljetter
                        <span>{title}</span>
                    </h1>
                    <div className={styles["movie-head"]}>
                        <p className={styles["movie-booking"]}>Boknings information</p>
                        <button className={styles["movie-button"]}>Välj annan dag</button>
                    </div>
                    <div className={styles["info-tickets"]}>
                        <p className={styles["movie-info"]}>
                            <strong>Datum: </strong>{" "}
                            <span>{date}</span>
                            <strong>Tid: </strong>
                            <span>{time}</span>{" "}
                            <strong>Salong: </strong>
                            <span>{salong}</span>
                            <strong>Spel tid: </strong>{" "}
                            <span>{lenght} min</span>
                        </p>
                        <div className={styles["ticket-details"]}>
                            <p className={styles["adult"]}>Vuxen ({adultPrice}kr)</p>
                            <p className={styles["child"]}>Barn / Pensionär ({childPrice}kr)</p>
                            <div className={styles["adult-ticket"]}>
                                <button className={styles["sub"]} onClick={() => setAdultTickets(checkInterval(adultTickets - 1) ? adultTickets - 1 : adultTickets)}>-</button>
                                <input type="number" pattern='\d{2}' value={adultTickets} disabled />
                                <button className={styles["add"]} onClick={() => setAdultTickets(checkInterval(adultTickets + 1) ? adultTickets + 1 : adultTickets)}>+</button>
                            </div>
                            <div className={styles["child-ticket"]}>
                                <button className={styles["sub"]} onClick={() => setChildTickets(checkInterval(childTickets - 1) ? childTickets - 1 : childTickets)}>-</button>
                                <input type="number" pattern='\d{2}' value={childTickets} disabled />
                                <button className={styles["add"]} onClick={() => setChildTickets(checkInterval(childTickets + 1) ? childTickets + 1 : childTickets)}>+</button>
                            </div>
                            <p className={styles["ticket-sumlabel"]}>Summa:</p>
                            <p className={styles["ticket-sum"]}>{ticketSum} kr</p>
                        </div>
                    </div>
                </div>

                <img src={imageURL} alt={title} className={styles["movie-poster"]} />
                <div className={styles["next-button"]}>
                    <button className={styles["movie-button"]}>Fortsätt med valda platser</button>
                </div>
            </section>



        </>
    );
};