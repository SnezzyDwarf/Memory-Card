import { NavLink } from "react-router-dom";
import Button from "../../ui/button/Button";

//images
import Logo from "../../../assets/img/LogoMemoryCard.png";

//css
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <NavLink to={"/"}>
          <img src={Logo} alt="Game Logo" className={styles.logo} />
        </NavLink>
      </div>

      <div className={styles.center}>
        <NavLink to={"about"}>
          <Button>Rules</Button>
        </NavLink>
      </div>

      <div className={styles.right}>
        <div className={styles.score}>
          <h3>High Score:</h3>

          <h3>0</h3>
        </div>
      </div>
    </nav>
  );
}
