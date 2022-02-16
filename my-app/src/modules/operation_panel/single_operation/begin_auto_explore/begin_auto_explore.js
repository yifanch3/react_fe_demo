import React from 'react';
import {
    VscCircuitBoard,
} from "react-icons/vsc";
import styles from '../single_operation_common.module.css';


export const BeginAutoExploreMode = () => {
    return (
        <div className={styles.container}>
            <div className={styles.statusIconContainer}>
                <VscCircuitBoard />
            </div>
            <div>
                {'Begin Autonomous Explore Mode'}
            </div>
        </div>
    );
};
