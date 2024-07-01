import { FunctionComponent } from "react";
import styles from "./BottomNav.module.css";

export type BottomNavType = {
  className?: string;
};

const BottomNav: FunctionComponent<BottomNavType> = ({ className = "" }) => {
  return (
    <div className={[styles.bottomNav, className].join(" ")}>
      <div className={styles.leftSide}>
        <div className={styles.category}>
          <div className={styles.button}>
            <div className={styles.allCategory}>All Category</div>
            <div className={styles.regularcaretdownWrapper}>
              <img
                className={styles.regularcaretdownIcon}
                alt=""
                src="/regularcaretdown-2.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.infoLinks}>
          <div className={styles.trackOrder}>
            <img
              className={styles.regularmappinlineIcon}
              loading="lazy"
              alt=""
              src="/regularmappinline.svg"
            />
            <div className={styles.helpLinks}>
              <div className={styles.trackOrder1}>Track Order</div>
            </div>
          </div>
        </div>
        <div className={styles.infoLinks1}>
          <div className={styles.compare}>
            <img
              className={styles.duotonearrowscounterclockwiseIcon}
              loading="lazy"
              alt=""
              src="/duotonearrowscounterclockwise.svg"
            />
            <div className={styles.compareWrapper}>
              <div className={styles.compare1}>Compare</div>
            </div>
          </div>
        </div>
        <div className={styles.infoLinks2}>
          <div className={styles.customerSupport}>
            <img
              className={styles.regularheadphonesIcon}
              loading="lazy"
              alt=""
              src="/regularheadphones.svg"
            />
            <div className={styles.customerSupportWrapper}>
              <div className={styles.customerSupport1}>Customer Support</div>
            </div>
          </div>
        </div>
        <div className={styles.infoLinks3}>
          <div className={styles.needHelp}>
            <img
              className={styles.regularinfoIcon}
              loading="lazy"
              alt=""
              src="/regularinfo.svg"
            />
            <div className={styles.needHelpWrapper}>
              <div className={styles.needHelp1}>Need Help</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.callNowWrapper}>
        <div className={styles.callNow}>
          <img
            className={styles.regularphonecallIcon}
            loading="lazy"
            alt=""
            src="/regularphonecall.svg"
          />
          <div className={styles.phoneNumberWrapper}>
            <div className={styles.phoneNumber}>+1-202-555-0104</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
