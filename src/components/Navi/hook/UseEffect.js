import React, { useState, useEffect } from 'react'
import styles from '../hook/Style.module.scss';

const UseEffect = () => {

    const [myNum, setMyNum] = useState(0);

    useEffect(() => {
        document.title = `Chats(${myNum})`;
    });


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

            </div>
        </div>
    )
}

export default UseEffect
