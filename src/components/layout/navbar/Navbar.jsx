import { NavLink } from "react-router-dom";

//images
import Logo from "../../../assets/img/LogoMemoryCard.png";
import BookClose from "../../../assets/img/Book_about.png";
import BookOpen from "../../../assets/img/Book_About_Open.png";

//css
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar({ highScore }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <NavLink to={"/"}>
          <img src={Logo} alt="Game Logo" className={styles.logo} />
        </NavLink>
      </div>

      <div className={styles.center}>
        <NavLink to={"about"}>
          <img
            src={isHovered ? `${BookOpen}` : `${BookClose}`}
            alt={isHovered ? `Magic Book Open` : `Magic Book Closed`}
            onMouseEnter={() => setIsHovered((prev) => !prev)}
            onMouseLeave={() => setIsHovered((prev) => !prev)}
            className={styles.book}
          />
        </NavLink>
      </div>

      <div className={styles.right}>
        <div className={styles.score}>
          <h3>High Score:</h3>

          <h3>{highScore}</h3>
        </div>
      </div>
    </nav>
  );
}
