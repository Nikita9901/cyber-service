import { HeadBlock, ServiceBlock, FooterBlock } from "../components";
import background from "./images/background.png";
import backgroundMob from "./images/backgroundMob.png";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <HeadBlock />
      <ServiceBlock />
      <FooterBlock />
      <img src={background} alt="" className={styles.background} />
      <img src={backgroundMob} alt="" className={styles.backgroundMob} />
    </div>
  );
}

export default App;
