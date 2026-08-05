import ContainerMenu from "../../ui/containerMenu/containerMenu";

//images
import Parchment from "../../../assets/img/Parchment.png";

//css
import styles from "./DifficultMenu.module.css";

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
            <h2>Easy</h2>
            <h2>Medium</h2>
            <h2>Hard</h2>
          </div>
        </ContainerMenu>
      </section>
    </>
  );
}
