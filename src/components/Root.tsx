import { FunctionComponent, useCallback } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./Root.module.css";

export type RootType = {
  className?: string;
};

const Root: FunctionComponent<RootType> = ({ className = "" }) => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "cart" to the project
  }, []);

  return (
    <div className={[styles.root, className].join(" ")}>
      <div className={styles.productPreview}>
        <img
          className={styles.mainImageIcon}
          loading="lazy"
          alt=""
          src="/main-image@2x.png"
        />
        <div className={styles.photo}>
          <img
            className={styles.placeholderIcon}
            loading="lazy"
            alt=""
            src="/01@2x.png"
          />
          <img
            className={styles.placeholderIcon1}
            loading="lazy"
            alt=""
            src="/05@2x.png"
          />
          <img
            className={styles.placeholderIcon2}
            loading="lazy"
            alt=""
            src="/03@2x.png"
          />
          <img
            className={styles.placeholderIcon3}
            loading="lazy"
            alt=""
            src="/04@2x.png"
          />
          <img
            className={styles.placeholderIcon4}
            loading="lazy"
            alt=""
            src="/02@2x.png"
          />
          <img
            className={styles.placeholderIcon5}
            loading="lazy"
            alt=""
            src="/06@2x.png"
          />
        </div>
      </div>
      <form className={styles.productDetail}>
        <div className={styles.productContentParent}>
          <div className={styles.productContent}>
            <div className={styles.heading}>
              <div className={styles.stars}>
                <div className={styles.star}>
                  <img
                    className={styles.regularstarIcon}
                    loading="lazy"
                    alt=""
                    src="/regularstar.svg"
                  />
                  <img
                    className={styles.regularstarIcon1}
                    loading="lazy"
                    alt=""
                    src="/regularstar.svg"
                  />
                  <img
                    className={styles.regularstarIcon2}
                    loading="lazy"
                    alt=""
                    src="/regularstar.svg"
                  />
                  <img
                    className={styles.regularstarIcon3}
                    loading="lazy"
                    alt=""
                    src="/regularstar.svg"
                  />
                  <img
                    className={styles.regularstarIcon4}
                    loading="lazy"
                    alt=""
                    src="/regularstar.svg"
                  />
                </div>
                <div className={styles.starRating}>4.7 Star Rating</div>
                <a className={styles.userFeedback}>(21,671 User feedback)</a>
              </div>
              <h3 className={styles.appleMacbookPro}>
                2024 Apple MacBook Pro with Apple M3 Chip (13-inch, 8GB RAM,
                256GB SSD Storage) - Space Gray
              </h3>
            </div>
            <div className={styles.funFact}>
              <div className={styles.row}>
                <div className={styles.skuA264671}>
                  <span className={styles.sku}>{`Sku: `}</span>
                  <span className={styles.a264671}>A264671</span>
                </div>
                <div className={styles.availabilityInStockContainer}>
                  <span
                    className={styles.availability}
                  >{`Availability: `}</span>
                  <span className={styles.inStock}>In Stock</span>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.brandApple}>
                  <span className={styles.brand}>{`Brand: `}</span>
                  <span className={styles.apple}>Apple</span>
                </div>
                <div className={styles.categoryElectronicsDevicesContainer}>
                  <span className={styles.category}>{`Category: `}</span>
                  <span className={styles.electronicsDevices}>
                    Electronics Devices
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.descriptionParent}>
            <div className={styles.description}>$1699</div>
            <div className={styles.callToActionWrapper}>
              <div className={styles.callToAction}>$1999.00</div>
            </div>
            <div className={styles.badgeWrapper}>
              <div className={styles.badge}>
                <div className={styles.hot}>21% OFF</div>
              </div>
            </div>
          </div>
          <div className={styles.devider} />
        </div>
        <div className={styles.options}>
          <div className={styles.colorOptions}>
            <div className={styles.color}>Color</div>
            <div className={styles.storageOptions}>
              <div className={styles.storageDropdown}>
                <div className={styles.color1}>
                  <div className={styles.storagePlaceholder} />
                </div>
                <div className={styles.color2}>
                  <div className={styles.memoryPlaceholder} />
                </div>
              </div>
              <div className={styles.memory}>Memory</div>
            </div>
            <div className={styles.dropdown}>
              <div className={styles.goodMorning}>16GB unified memory</div>
              <div className={styles.quantityCaret}>
                <img
                  className={styles.regularcaretdownIcon}
                  alt=""
                  src="/regularcaretdown.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.colorOptions1}>
            <FrameComponent
              size="Size"
              goodMorning="14-inch Liquid Retina XDR display"
            />
            <FrameComponent size="Storage" goodMorning="1TV SSD Storage" />
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.quantity}>
            <div className={styles.button}>
              <input className={styles.quantityIcons} type="checkbox" />
              <div className={styles.cartButton}>01</div>
              <div className={styles.quantityIcons1}>
                <img
                  className={styles.duotoneplusIcon}
                  loading="lazy"
                  alt=""
                  src="/duotoneplus.svg"
                />
              </div>
            </div>
            <button className={styles.button1}>
              <b className={styles.label}>Add to card</b>
              <div className={styles.cartIcon}>
                <img
                  className={styles.shoppingcartsimpleIcon}
                  alt=""
                  src="/shoppingcartsimple.svg"
                />
              </div>
            </button>
            <div className={styles.button2} onClick={onButtonContainerClick}>
              <b className={styles.label1}>BUY NOW</b>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.button3}>
              <div className={styles.addToWishlist}>
                <img
                  className={styles.heartIcon}
                  loading="lazy"
                  alt=""
                  src="/heart.svg"
                />
                <div className={styles.addToWishlist1}>Add to Wishlist</div>
              </div>
              <div className={styles.addToWishlist2}>
                <img
                  className={styles.duotonearrowsclockwiseIcon}
                  loading="lazy"
                  alt=""
                  src="/duotonearrowsclockwise.svg"
                />
                <div className={styles.addToWishlist3}>Add to Compare</div>
              </div>
            </div>
            <div className={styles.shareProduct}>
              <div className={styles.shareProduct1}>Share product:</div>
              <div className={styles.socialIcon}>
                <input className={styles.regularcopy} type="checkbox" />
                <img
                  className={styles.facebookIcon}
                  loading="lazy"
                  alt=""
                  src="/facebook.svg"
                />
                <img
                  className={styles.twitterIcon}
                  loading="lazy"
                  alt=""
                  src="/twitter.svg"
                />
                <img
                  className={styles.pinterestIcon}
                  loading="lazy"
                  alt=""
                  src="/pinterest.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.guaranteeSafeCheckout}>
            <div className={styles.guaranteeSafeCheckout1}>
              100% Guarantee Safe Checkout
            </div>
            <img
              className={styles.paymentMethodIcon}
              loading="lazy"
              alt=""
              src="/payment-method@2x.png"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Root;
