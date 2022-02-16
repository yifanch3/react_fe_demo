import React from 'react';
import styles from './topbar.module.css';

import { useSelector } from 'react-redux'

export const TopBar = () => {
    const moduleName = useSelector(state => {
        return state.currentModule.moduleName;
    });
    return (
        <div className={styles.container}>
            {`${moduleName}`}
        </div>
    );
};
