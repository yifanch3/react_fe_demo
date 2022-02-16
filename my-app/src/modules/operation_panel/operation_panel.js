import React from 'react';
import cls from 'classnames';
import { ReturnToLander } from './single_operation/return_landers';
import styles from './operation_panel.module.css';


export const OperationPanel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {'Operations'}
            </div>
            <div className={styles.operationGroups}>
                <ReturnToLander />
            </div>
        </div>
    );
};
