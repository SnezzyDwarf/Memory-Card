//images
import Parchment from "../../assets/img/Parchment.png";

//css
import styles from "./AboutMenu.module.css";

//components
import ContainerMenu from "../../components/ui/containerMenu/ContainerMenu";

export default function AboutMenu() {
  return (
    <section className={styles.section}>
      <ContainerMenu
        variant="primary"
        img={Parchment}
        alt="Old paper background"
        imageVariant="image"
      >
        <div className={styles.content}>
          <h3>How to Play</h3>

          <p>Each card only once per round.</p>
          <p>The cards shuffle after every round.</p>
          <p>Click each card only once per round.</p>
          <p>Click a card you've already chosen and you lose.</p>
          <p>
            Your Score counts your victories. Your High Score records your best
            run
          </p>
        </div>
      </ContainerMenu>
    </section>
  );
}
