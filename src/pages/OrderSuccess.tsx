import { FunctionComponent } from "react";
import Widget from "../components/Widget";
import MiddleNav from "../components/MiddleNav";
import BottomNav from "../components/BottomNav";
import Breadcrumb from "../components/Breadcrumb";
import SuccessMessage from "../components/SuccessMessage";
import Footer from "../components/Footer";
import styles from "./OrderSuccess.module.css";

const OrderSuccess: FunctionComponent = () => {
  return (
    <div className={styles.orderSuccess}>
      <section className={styles.navigation}>
        <Widget />
        <header className={styles.navigation1}>
          <div className={styles.topNav}>
            <div
              className={styles.welcomeToClicon}
            >{`Welcome to Clicon online eCommerce store. `}</div>
            <div className={styles.leftContent}>
              <div className={styles.followUs}>
                <div className={styles.followUs1}>Follow us:</div>
                <div className={styles.socialIcon}>
                  <img
                    className={styles.twitterIcon}
                    alt=""
                    src="/twitter1.svg"
                  />
                  <img
                    className={styles.facebookIcon}
                    alt=""
                    src="/facebook1.svg"
                  />
                  <img
                    className={styles.pinterestIcon}
                    alt=""
                    src="/pinterest1.svg"
                  />
                  <img className={styles.redditIcon} alt="" src="/reddit.svg" />
                  <img
                    className={styles.youtubeIcon}
                    alt=""
                    src="/youtube.svg"
                  />
                  <img
                    className={styles.instagramIcon}
                    alt=""
                    src="/instagram.svg"
                  />
                </div>
              </div>
              <div className={styles.leftContentChild} />
              <div className={styles.multiLanguagedrodpwon}>
                <div className={styles.dropdown}>
                  <div className={styles.eng}>Eng</div>
                  <img
                    className={styles.regularcaretdownIcon}
                    alt=""
                    src="/regularcaretdown1.svg"
                  />
                </div>
              </div>
              <div className={styles.multiCurrencydropdown}>
                <div className={styles.dropdown1}>
                  <div className={styles.usd}>USD</div>
                  <img
                    className={styles.regularcaretdownIcon1}
                    alt=""
                    src="/regularcaretdown1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <MiddleNav />
          <BottomNav />
        </header>
      </section>
      <Breadcrumb />
      <SuccessMessage />
      <Footer />
    </div>
  );
};

export default OrderSuccess;
