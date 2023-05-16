import styles from "@/styles/booking.module.scss";

export default function Booking()
{
    // Mock data
    let title = "Blade"
    let date = "2023-06-24"
    let time = "14:30"
    let salong = "Alcazar"
    let lenght = "120"
    let imageURL = "https://m.media-amazon.com/images/M/MV5BOTk2NDNjZWQtMGY0Mi00YTY2LWE5MzctMGRhZmNlYzljYTg5XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg"

    return (
        <>
            <section className={styles["movie-details"]}>
                <div>
                    <h1 className={styles["movie-title"]}>Boka biljetter
                        <span>{title}</span>
                    </h1>
                    <div className={styles["movie-head"]}>
                        <p className={styles["movie-booking"]}>Boknings information</p>
                        <button className={styles["movie-tickets"]}>Välj annan dag</button>
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
                            <p className={styles["adult"]}>Vuxen (150kr)</p>
                            <p className={styles["child"]}>Barn / Pensionär (100kr)</p>
                            <div className={styles["adult-ticket"]}>
                                <button className={styles["add"]}>+</button>
                                <input type="number" pattern='\d{3}' placeholder="0" />
                                <button className={styles["sub"]}>-</button>
                            </div>
                            <div className={styles["child-ticket"]}>
                                <button className={styles["add"]}>+</button>
                                <input type="number" pattern='\d{3}' placeholder="0" />
                                <button className={styles["sub"]}>-</button>
                            </div>
                            <p className={styles["ticket-sumlabel"]}>Summa:</p>
                            <p className={styles["ticket-sum"]}>500 kr</p>
                        </div>
                    </div>
                </div>

                <img src={imageURL} alt={title} className={styles["movie-poster"]} />
            </section>



        </>
    );
};