import React from 'react';
import {
    VscRedo,
} from "react-icons/vsc";
import styles from '../single_operation_common.module.css';


export const ReturnToLander = () => {
    return (
        <div className={styles.container}>
            <div className={styles.statusIconContainer}>
                <VscRedo />
            </div>
            <div>
                {'Return to Lander'}
            </div>
        </div>
    );
};
