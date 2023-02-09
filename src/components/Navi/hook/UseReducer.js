import React, {useReducer, useState} from 'react';
import styles from '../hook/Style.module.scss';

const reducer = (state, action) => {
    if(action.type === "INCREMENT"){
        state = state + 1;
    }

    // if(action.type === "DECREMENT") {
    //     state = state - 1;
    // }

    if(state > 0 && action.type === "DECREMENT") {
        state = state - 1;
    }

    return state;
};

const UseReducer = () => {

    // const [myNum, setMyNum] = useState(0);
 
    const initialData = 10;
    const [state, dispatch] = useReducer(reducer, initialData);

    return (
        <div>
            <div className={styles.center_div}>

                <p>{state}</p>

                <div 
                className={styles.button2}
                 onClick={() => dispatch({type: "INCREMENT"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCREMENT
                </div>

                <div
                    className={styles.button2}
                    onClick={() => dispatch({type: "DECREMENT"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECREMENT
                </div>

            </div>
        </div>
    )
}

export default UseReducer
