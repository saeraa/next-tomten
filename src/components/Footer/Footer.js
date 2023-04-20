import styles from "@/styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-section"]}>
        <h3 className={styles.header}>Tomtens Biograf</h3>
        <p>
          Storgatan 23 <br />
          999 00 Mellankalix
        </p>
      </div>

      <div className={styles["footer-section"]}>
        <h3 className={styles.header}>Kontakta oss</h3>
        <p>
          E-post: <a href="">info@tomtensbiograf.se</a>
        </p>
        <p>Telefon: 999 - 000 22 33</p>
        <p>
          Följ oss på <a href="">Facebook</a> och
          <a href="">Instagram</a>
        </p>
      </div>

      <div className={styles["footer-section"]}>
        <h3 className={styles.header}>I samarbete med:</h3>
        <img src="/sponsors/sponsor_sfilm.png" alt="Nån sponsor, typ" />
        <img alt="Tomtemor" />
      </div>
    </footer>
  );
};

export default Footer;
