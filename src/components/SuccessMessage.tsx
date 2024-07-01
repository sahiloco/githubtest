import { FunctionComponent, useCallback } from "react";
import styles from "./SuccessMessage.module.css";

export type SuccessMessageType = {
  className?: string;
};

const SuccessMessage: FunctionComponent<SuccessMessageType> = ({
  className = "",
}) => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  return (
    <section className={[styles.successMessage, className].join(" ")}>
      <div className={styles.content}>
        <img
          className={styles.duotonecheckcircleIcon}
          loading="lazy"
          alt=""
          src="/duotonecheckcircle.svg"
        />
        <div className={styles.yourOrderIsSuccessfullyPlaParent}>
          <h2 className={styles.yourOrderIs}>
            Your order is successfully place
          </h2>
          <div className={styles.pellentesqueSedLectus}>
            Pellentesque sed lectus nec tortor tristique accumsan quis dictum
            risus. Donec volutpat mollis nulla non facilisis.
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.button1} onClick={onButtonContainerClick}>
          <img
            className={styles.regularstackIcon}
            alt=""
            src="/regularstack.svg"
          />
          <b className={styles.label}>Go to HOMEPAGE</b>
        </div>
        <button className={styles.button2}>
          <b className={styles.label1}>View Order</b>
          <img
            className={styles.regulararrowrightIcon}
            alt=""
            src="/regulararrowright-1.svg"
          />
        </button>
      </div>
    </section>
  );
};

export default SuccessMessage;
