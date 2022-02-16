import React from 'react';
import cls from 'classnames';
import { ReturnToLander } from './single_operation/return_landers/return_landers';
import { StopAllActions } from './single_operation/stop_all_actions/stop_all_actions';
import { BeginAutoExploreMode } from './single_operation/begin_auto_explore/begin_auto_explore';
import styles from './operation_panel.module.css';


export const OperationPanel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {'Operations'}
            </div>
            <div className={styles.operationGroups}>
                <ReturnToLander />
                <StopAllActions />
                <BeginAutoExploreMode />
            </div>
        </div>
    );
};
