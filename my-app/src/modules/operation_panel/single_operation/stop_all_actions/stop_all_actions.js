import React from 'react';
import cls from 'classnames';
import {
    VscClose,
} from "react-icons/vsc";
import styles from '../single_operation_common.module.css';
import localStyles from './stop_all_actions.module.css';


export const StopAllActions = () => {
    return (
        <div className={cls(styles.container, localStyles.localContainerStyle)}>
            <div className={styles.statusIconContainer}>
                <VscClose />
            </div>
            <div>
                {'Stop All Action'}
            </div>
        </div>
    );
};
