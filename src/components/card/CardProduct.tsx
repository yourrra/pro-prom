import React, { useState } from 'react';
import { getTabsShortList } from '../../request/tabs';
//@ts-ignore
import styles from "./CardProduct.module.scss"

const CardProduct = () => {
    const [x, setX] = useState("");
    
    return (
        <div className={styles.cardStyle}>
            {x}
        </div>
    );
};

export default CardProduct;