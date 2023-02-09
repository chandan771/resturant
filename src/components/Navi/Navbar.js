import React from 'react'
import styles from "../Navi/Rest.module.scss";



const Navbar = ({filterItem, menuList}) => {
  return (
    <div>
         <nav className={styles.navbar}>
            <div className={styles.btn_group}>

              {
                menuList.map((curElem) => {
                  return (
                    <button className={styles.btn_group__item}
                    onClick={() => filterItem(curElem)}>
                     {curElem}
                     </button>
                  )
                })
              }

              
              
                {/* <button className={styles.btn_group__item}
                 onClick={() => filterItem("breakfast")}>
                  Breakfast
                  </button>

                <button className={styles.btn_group__item} 
                onClick={() => filterItem("lunch")}>
                  Lunch
                  </button>

                <button className={styles.btn_group__item}
                onClick={() => filterItem("evening")}>
                  Evening
                  </button>

                <button className={styles.btn_group__item}
                onClick={() => filterItem("dinner")}>
                  Dinner
                  </button> */}

                  

                {/* <button className={styles.btn_group__item}
                onClick={() => setMenuData(all)}>
                  All
                  </button> */}
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
