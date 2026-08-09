import ContainerMenu from "../../ui/containerMenu/containerMenu";

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
              <NavLink to={"/game"}>
                <h2>Easy</h2>
              </NavLink>
              <h2>Medium</h2>
              <h2>Hard</h2>
            </div>
          </div>
        </ContainerMenu>
      </section>
    </>
  );
}
