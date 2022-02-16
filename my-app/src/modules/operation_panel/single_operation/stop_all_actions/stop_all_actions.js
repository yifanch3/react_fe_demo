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


export const StopAllActions = () => {
    const dispatch = useDispatch();
    const isStoping = useSelector(state => !!state.operations.operationsInProgress[triggerStopAll.toString()]);
    const [isMouseOver, setIsMouseOver] = useState(false);
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
