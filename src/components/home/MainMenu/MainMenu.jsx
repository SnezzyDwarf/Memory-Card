import { NavLink } from "react-router-dom";

//css
import styles from "./MainMenu.module.css";

//images
import Parchment from "../../../assets/img/Parchment.png";

//components
import ContainerMenu from "../../ui/containerMenu/ContainerMenu";

export default function MainMenu() {
  return (
    <section className={styles.section}>
      <ContainerMenu
        variant="primary"
        img={Parchment}
        alt="Old paper background"
        imageVariant="image"
      >
        <div className={styles.content}>
          <NavLink to={"/choose"}>
            <h2>New Game</h2>
          </NavLink>
          <NavLink to={"/about"}>
            <h2>How to Play</h2>
          </NavLink>
        </div>
      </ContainerMenu>
    </section>
  );
}
