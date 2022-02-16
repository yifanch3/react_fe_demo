import React from 'react';
import styles from './single_operation_common.module.css';


export const ReturnToLander = () => {
    return (
        <div className={styles.container}>
            <div className={styles.statusIconContainer}>
            </div>
            <div className={styles.operationName}>
                {'Return to Lander'}
            </div>
        </div>
    );
};
