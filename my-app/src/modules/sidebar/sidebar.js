import React, { useCallback, useState } from 'react';
import cls from 'classnames';
import {
    VscGlobe,
    VscFolderActive,
    VscGear,
    VscDebug,
    VscDeviceCamera,
    VscHistory,
    VscDesktopDownload,
    VscCircuitBoard,
} from "react-icons/vsc";
import styles from './sidebar.module.css';

export const SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.optionContainer}>
                <VscGlobe />
                <div className={styles.optionText}>{'MoonRanger'}</div>
            </div>
            <div className={styles.divideLine} />
            <div className={styles.optionContainer}>
                <VscCircuitBoard />
                <div className={styles.optionText}>{'Component'}</div>
            </div>
            <div className={styles.optionContainer}>
                <VscFolderActive />
                <div className={styles.optionText}>{'Files'}</div>
            </div>
            <div className={styles.optionContainer}>
                <VscGear />
                <div className={styles.optionText}>{'Setting'}</div>
            </div>
            <div className={styles.optionContainer}>
                <VscDebug />
                <div className={styles.optionText}>{'Bugs'}</div>
            </div>
            <div className={styles.optionContainer}>
                <VscDeviceCamera />
                <div className={styles.optionText}>{'Feeds'}</div>
            </div>
            <div className={styles.optionContainer}>
                <VscHistory />
                <div className={styles.optionText}>{'Historys'}</div>
            </div>
            <div className={styles.optionContainer}>
                <VscDesktopDownload />
                <div className={styles.optionText}>{'Downloads'}</div>
            </div>
        </div>
    );
};
