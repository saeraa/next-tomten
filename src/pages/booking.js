import styles from "@/styles/booking.module.scss";
import { useState } from "react";

export function getServerSideProps(context)
{
    return {
        props: {
            showtimeId: context.query.showtimeId,
            showtimeSalong: context.query.showtimeSalong,
            showtimedate: context.query.showtimeDate,
            title: context.query.title,
            poster: context.query.poster,
            length: context.query.length
        }
    }
}

export default function Booking({ showtimeId, showtimeSalong, showtimedate, title, poster, length })
{
    const [adultPrice, setAdultPrice] = useState(150);
    const [childPrice, setChildPrice] = useState(100);
    const [adultTickets, setAdultTickets] = useState(0);
    const [childTickets, setChildTickets] = useState(0);

    const showtimeDate = new Date(showtimedate);

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
                            <span>{showtimeDate.toLocaleDateString("sv-SE", {
                                weekday: "short",
                                day: "numeric",
                                month: "short"
                            }).toUpperCase()}
                            </span>
                            <strong>Tid: </strong>
                            <span>{showtimeDate.toLocaleTimeString("sv-SE", {
                                hour: "numeric",
                                minute: "numeric"
                            })}</span>
                            <strong>Salong: </strong>
                            <span>{showtimeSalong}</span>
                            <strong>Spel tid: </strong>{" "}
                            <span>{length} min</span>
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

                <img src={poster} alt={title} className={styles["movie-poster"]} />
                <div className={styles["next-button"]}>
                    <button className={styles["movie-button"]}>Fortsätt med valda platser</button>
                </div>
            </section>
        </>
    );
};