import React, { useCallback, useState } from 'react';
import cls from 'classnames';
import {
    VscFolderActive,
    VscGear,
    VscDebug,
    VscDeviceCamera,
    VscHistory,
    VscDesktopDownload,
    VscCombine,
    VscRocket,
} from "react-icons/vsc";
import styles from './sidebar.module.css';

export const SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.optionContainer}>
                <VscRocket />
                <div className={styles.optionText}>{'MoonRanger'}</div>
            </div>
            <div className={styles.divideLine} />
            <div className={styles.optionContainer}>
                <VscCombine />
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
