import { FunctionComponent } from "react";
import styles from "./Widget.module.css";

export type WidgetType = {
  className?: string;
};

const Widget: FunctionComponent<WidgetType> = ({ className = "" }) => {
  return (
    <div className={[styles.widget, className].join(" ")}>
      <img
        className={styles.blackIcon}
        loading="lazy"
        alt=""
        src="/black@2x.png"
      />
      <div className={styles.fridayWrapper}>
        <a className={styles.friday}>Friday</a>
      </div>
      <div className={styles.discountWrapper}>
        <div className={styles.discount}>
          <div className={styles.upToWrapper}>
            <a className={styles.upTo}>Up to</a>
          </div>
          <a className={styles.percentSign}>59%</a>
          <div className={styles.offWrapper}>
            <a className={styles.off}>OFF</a>
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <a className={styles.label}>Shop now</a>
        <div className={styles.regulararrowrightWrapper}>
          <img
            className={styles.regulararrowrightIcon}
            alt=""
            src="/regulararrowright.svg"
          />
        </div>
      </button>
      <div className={styles.closeButtonWrapper}>
        <div className={styles.closeButton}>
          <img className={styles.duotonexIcon} alt="" src="/duotonex.svg" />
        </div>
      </div>
    </div>
  );
};

export default Widget;
