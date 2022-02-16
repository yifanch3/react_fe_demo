import React from 'react';
import {
    VscFolderActive,
    VscGear,
    VscDebug,
    VscDeviceCamera,
    VscHistory,
    VscDesktopDownload,
    VscCombine,
    VscRocket,
    VscTerminalTmux,
} from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import styles from './sidebar.module.css';

import { switchModule } from '../../store/actions';

const useCustomizedDispatch = () => {
    const defaultDispatch = useDispatch();
    return (actionObject) => {
        const traceId = `${Math.random()}`;
        defaultDispatch({ ...(actionObject || {}), traceId });
    };
};

export const SideBar = () => {

    const dispatch = useCustomizedDispatch();
    
    return (
        <div className={styles.container}>
            <div className={styles.optionContainer}>
                <VscRocket />
                <div className={styles.optionText}>{'MoonRanger'}</div>
            </div>
            <div className={styles.divideLine} />
            <div
                className={styles.optionContainer}
                onClick={() => dispatch(switchModule({ moduleName: 'Map Terminal', moduleCode: 0 }))}
            >
                <VscTerminalTmux />
                <div className={styles.optionText}>{'Map Terminal'}</div>
            </div>
            <div
                className={styles.optionContainer}
                onClick={() => dispatch(switchModule({ moduleName: 'Files', moduleCode: 1 }))}
            >
                <VscFolderActive />
                <div className={styles.optionText}>{'Files'}</div>
            </div>
            <div
                className={styles.optionContainer}
                onClick={() => dispatch(switchModule({ moduleName: 'Setting', moduleCode: 2 }))}
            >
                <VscGear />
                <div className={styles.optionText}>{'Setting'}</div>
            </div>
            <div
                className={styles.optionContainer}
                onClick={() => dispatch(switchModule({ moduleName: 'Bugs', moduleCode: 3 }))}
            >
                <VscDebug />
                <div className={styles.optionText}>{'Bugs'}</div>
            </div>
            <div
                className={styles.optionContainer}
                onClick={() => dispatch(switchModule({ moduleName: 'Feeds', moduleCode: 4 }))}
            >
                <VscDeviceCamera />
                <div className={styles.optionText}>{'Feeds'}</div>
            </div>
            <div
                className={styles.optionContainer}
                onClick={() => dispatch(switchModule({ moduleName: 'Historys', moduleCode: 5 }))}
            >
                <VscHistory />
                <div className={styles.optionText}>{'Historys'}</div>
            </div>
            <div
                className={styles.optionContainer}
                onClick={() => dispatch(switchModule({ moduleName: 'Downloads', moduleCode: 6 }))}
            >
                <VscDesktopDownload />
                <div className={styles.optionText}>{'Downloads'}</div>
            </div>
        </div>
    );
};
