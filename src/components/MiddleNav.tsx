import { FunctionComponent } from "react";
import styles from "./MiddleNav.module.css";

export type MiddleNavType = {
  className?: string;
};

const MiddleNav: FunctionComponent<MiddleNavType> = ({ className = "" }) => {
  return (
    <div className={[styles.middleNav, className].join(" ")}>
      <div className={styles.logo}>
        <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
        <div className={styles.cliconWrapper}>
          <a className={styles.clicon}>CLICON</a>
        </div>
      </div>
      <div className={styles.searchForAnythingParent}>
        <input
          className={styles.searchForAnything}
          placeholder="Search for anything..."
          type="text"
        />
        <img
          className={styles.regularmagnifyingglassIcon}
          alt=""
          src="/regularmagnifyingglass.svg"
        />
      </div>
      <div className={styles.iconsWrapper}>
        <div className={styles.icons}>
          <div className={styles.shoppingcartsimple}>
            <img
              className={styles.shoppingCartIcon}
              alt=""
              src="/shopping-cart.svg"
            />
            <div className={styles.wishlist}>
              <div className={styles.regularUser}>
                <img
                  className={styles.wishlistHeartIcon}
                  alt=""
                  src="/vector-1.svg"
                />
                <div className={styles.userCircle}>
                  <div className={styles.userDot}>2</div>
                </div>
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector-2.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector-2.svg" />
            </div>
          </div>
          <img
            className={styles.heartIcon}
            loading="lazy"
            alt=""
            src="/heart1.svg"
          />
          <img
            className={styles.regularuserIcon}
            loading="lazy"
            alt=""
            src="/regularuser.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
