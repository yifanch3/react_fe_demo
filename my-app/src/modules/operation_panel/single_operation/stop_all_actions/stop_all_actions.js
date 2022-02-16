import React from 'react';
import cls from 'classnames';
import {
    VscClose,
} from "react-icons/vsc";
import styles from '../single_operation_common.module.css';
import localStyles from './stop_all_actions.module.css';
import { triggerStopAll } from '../../../../store/reducers/operations';
import { useDispatch, useSelector } from 'react-redux';


export const StopAllActions = () => {
    const dispatch = useDispatch();
    const isStoping = useSelector(state => !!state.operations.operationsInProgress['StopAll']);
    return (
        <div
            className={cls(styles.container, localStyles.localContainerStyle)}
            onClick={() => {
                dispatch(triggerStopAll());
            }}
        >
            <div className={styles.statusIconContainer}>
                <VscClose />
            </div>
            <div>
                {isStoping ? 'Stoping' : 'Stop All Action'}
            </div>
        </div>
    );
};
