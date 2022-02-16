import React from 'react';
import cls from 'classnames';
import styles from './operation_panel.module.css';


export const OperationPanel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {'Operations'}
            </div>
            <div className={styles.operationGroups}>
            </div>
        </div>
    );
};
