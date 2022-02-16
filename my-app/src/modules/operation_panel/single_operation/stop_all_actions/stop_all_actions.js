import React, { useState } from 'react';
import cls from 'classnames';
import {
    VscClose,
} from "react-icons/vsc";
import { ClipLoader } from 'react-spinners';
import styles from '../single_operation_common.module.css';
import localStyles from './stop_all_actions.module.css';
import { triggerStopAll } from '../../../../store/reducers/operations';
import { useDispatch, useSelector } from 'react-redux';


const useCustomizedDispatch = () => {
    const defaultDispatch = useDispatch();
    return (actionObject) => {
        const traceId = `${Math.random()}`;
        defaultDispatch({ ...(actionObject || {}), traceId });
    };
};

export const StopAllActions = () => {
    const isStoping = useSelector(state => !!state.operations.operationsInProgress[triggerStopAll.toString()]);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const dispatch = useCustomizedDispatch();
    return (
        <div
            className={cls(styles.container, localStyles.localContainerStyle)}
            onClick={() => {
                dispatch(triggerStopAll());
            }}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
        >
            <div className={styles.statusIconContainer}>
                { isStoping ? <ClipLoader color={isMouseOver ? "red" : "#f1f3f4"} size={20} /> : <VscClose /> }
            </div>
            <div>
                {isStoping ? 'Stoping...' : 'Stop All Action'}
            </div>
        </div>
    );
};
