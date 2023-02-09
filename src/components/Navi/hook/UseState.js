import React from 'react'
import styles from '../hook/Style.module.scss';


function UseState() {

  const [myNum, setMyNum] = React.useState(0);

  return (
    <div>

      <div className={styles.center_div}>

        <p>{myNum}</p>
        
        <div className={styles.button2} onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>

        <div
          className={styles.button2}
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECREMENT
        </div>

      </div>



    </div>
  );
};

export default UseState;
