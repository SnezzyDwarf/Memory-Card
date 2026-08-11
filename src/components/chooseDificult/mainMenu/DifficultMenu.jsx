import ContainerMenu from "../../ui/containerMenu/ContainerMenu";

//images
import Parchment from "../../../assets/img/Parchment.png";

//css
import styles from "./DifficultMenu.module.css";
import { NavLink } from "react-router-dom";

export default function MainMenu() {
  return (
    <>
      <section className={styles.section}>
        <ContainerMenu
          variant="primary"
          img={Parchment}
          alt="Old paper background"
          imageVariant="image"
        >
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>Choose your dificult</h2>
            </div>
            <div className={styles.text}>
              <NavLink to={"/game"} state={{ difficulty: "easy" }}>
                <h2>Easy</h2>
              </NavLink>
              <NavLink to={"/game"} state={{ difficulty: "medium" }}>
                <h2>Medium</h2>
              </NavLink>
              <NavLink to={"/game"} state={{ difficulty: "hard" }}>
                <h2>Hard</h2>
              </NavLink>
            </div>
          </div>
        </ContainerMenu>
      </section>
    </>
  );
}
