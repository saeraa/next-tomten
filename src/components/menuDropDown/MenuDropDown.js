
const MenuDropDown = () => {
  return (
    <li className={styles.navListItem}>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>
            Repertoar
            <i class="fa fa-caret-down"></i>
          </button>
          <div className={styles.dropDownContent} id={styles.dropdownRepertoar}>
            <a href="placeholder.html">Hela bioprogrammet</a>
            <a href="comingPremieres.html">Kommande premiärer</a>
            <a href="placeholder.html">Erbjudande på matinéfilm</a>
          </div>
        </div>
      </li>
  )
}

export default MenuDropDown;
