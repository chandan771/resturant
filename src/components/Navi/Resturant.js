import React, { useState } from "react";
// import styles from "../Navi/Rest.module.scss";
import Menu from "../Navi/MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";


const uniqueList = [
  ...new Set(
  Menu.map((curElem) => {
  return curElem.category;
})
),
"All",
];

console.log(uniqueList);

const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    // console.log(menuData);

    const filterItem = (category) => {

      if(category=== "All") {
        setMenuData(Menu);
        return;
      }

      const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
      });

      setMenuData(updatedList);
    };


  return (
    <div>

      <Navbar filterItem={filterItem} menuList={menuList} />

      <MenuCard menuData={menuData}/>
      
    </div>
  );
};

export default Resturant;
