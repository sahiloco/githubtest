import { FunctionComponent } from "react";
import styles from "./MobileApp.module.css";

export type MobileAppType = {
  className?: string;
  icongooglePlay1?: string;
  googlePlay?: string;
};

const MobileApp: FunctionComponent<MobileAppType> = ({
  className = "",
  icongooglePlay1,
  googlePlay,
}) => {
  return (
    <div className={[styles.mobileApp, className].join(" ")}>
      <img className={styles.icongooglePlay1} alt="" src={icongooglePlay1} />
      <div className={styles.info}>
        <div className={styles.getItNow}>Get it now</div>
        <div className={styles.googlePlay}>{googlePlay}</div>
      </div>
    </div>
  );
};

export default MobileApp;
