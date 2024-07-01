import { FunctionComponent } from "react";
import styles from "./Breadcrumb.module.css";

export type BreadcrumbType = {
  className?: string;
};

const Breadcrumb: FunctionComponent<BreadcrumbType> = ({ className = "" }) => {
  return (
    <div className={[styles.breadcrumb, className].join(" ")}>
      <div className={styles.breadcumb}>
        <img
          className={styles.regularhouseIcon}
          alt=""
          src="/regularhouse.svg"
        />
        <a className={styles.home}>Home</a>
        <div className={styles.homeShop}>
          <img
            className={styles.regularcaretrightIcon}
            alt=""
            src="/regularcaretright.svg"
          />
        </div>
        <div className={styles.shop}>Shopping Card</div>
        <div className={styles.homeShop1}>
          <img
            className={styles.regularcaretrightIcon1}
            alt=""
            src="/regularcaretright.svg"
          />
        </div>
        <div className={styles.shopGrid}>Shop Grid</div>
        <img
          className={styles.regularcaretrightIcon2}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.shopGrid1}>Electronics Devices</div>
        <img
          className={styles.regularcaretrightIcon3}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.shopGrid2}>Shop Grid</div>
        <img
          className={styles.regularcaretrightIcon4}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.shopGrid3}>Shop Grid</div>
        <img
          className={styles.regularcaretrightIcon5}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.shopGrid4}>Track Order</div>
        <img
          className={styles.regularcaretrightIcon6}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.behicleAccessories}>Checkout</div>
      </div>
    </div>
  );
};

export default Breadcrumb;
