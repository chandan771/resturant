import React from "react";
import styles from "../Navi/Rest.module.scss";

const MenuCard = ({ menuData }) => {
  return (
    <div>
      <section className={styles.main_card_container}>
        {menuData.map((curElem) => {

          const {id, name, category, image, description} = curElem;


          return (
            <>
              <div className={styles.card_container} key={id}>
                <div className={styles.card}>
                  <div className={styles.card_body}>
                    <span className={styles.card_number}>{id}</span>
                    <span className={styles.card_author}>{category}</span>
                    <div className={styles.card_title}>{name}</div>
                    <span className={styles.card_description}>
                     {description}
                    </span>
                    <div className={styles.card_read}>Read</div>
                  </div>
                  <img
                    src={image}
                    alt=""
                    className={styles.card_media}
                  ></img>

                  <span className={styles.card_tag}>Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default MenuCard;
