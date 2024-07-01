import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  size?: string;
  goodMorning?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  size,
  goodMorning,
}) => {
  return (
    <div className={[styles.sizeParent, className].join(" ")}>
      <div className={styles.size}>{size}</div>
      <div className={styles.dropdown}>
        <div className={styles.goodMorning}>{goodMorning}</div>
        <div className={styles.colorCaret}>
          <img
            className={styles.regularcaretdownIcon}
            alt=""
            src="/regularcaretdown.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
