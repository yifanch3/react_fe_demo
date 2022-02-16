import { from } from 'rxjs';
import { mapTo, mergeMap, tap } from 'rxjs/operators';
import { ofType } from 'redux-observable'
import { triggerStopAll, setOperationInProgress, cancelOperationInProgress } from '../actions';

const delay = (time) => new Promise((resolve) => {
  const timer = setTimeout(
    () => {
      clearTimeout(timer);
      resolve();
    },
    time,
  );
});

export const setStopAllInProgressEpic = (action$) => (
  action$.pipe(
    ofType(triggerStopAll.toString()),
    tap(() => { console.log('trigger A'); }),
    mapTo(setOperationInProgress({ operationName: triggerStopAll.toString() }))
  )
);

export const sendStopAllCommandToRemoteEpic = (action$) => (
  action$.pipe(
    ofType(triggerStopAll.toString()),
    tap(() => { console.log('trigger B'); }),
    mergeMap(action => (
      /* MOCK Start, simulate some sending */
      from(delay(5000))
      /* MOCK Finish, simulate some sending */
      .pipe(
        mapTo(cancelOperationInProgress({ operationName: triggerStopAll.toString() })),
        tap(() => { console.log('trigger C'); }),
      )
    ))
  )
);
