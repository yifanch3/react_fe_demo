import React from 'react';
import cls from 'classnames';
import styles from './maps.module.css';

import { SingleMap } from './single_map';

export const Maps = () => (
    <div className={styles.container}>
        <SingleMap />
        <SingleMap />
        <SingleMap />
        <SingleMap />
    </div>
);