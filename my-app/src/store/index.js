import { applyMiddleware, configureStore } from '@reduxjs/toolkit';

import { combineEpics, createEpicMiddleware } from 'redux-observable'

import currentModule from './reducers/current_module';
import operations from './reducers/operations';

import { loggerMiddleware } from './middleware/logger';

import { setStopAllInProgressEpic, sendStopAllCommandToRemoteEpic } from './epics/stop_all_actions';


const rootEpic = combineEpics(
  sendStopAllCommandToRemoteEpic,
  setStopAllInProgressEpic,
)

// redux middleware for the epic, create it
const epicMiddleware = createEpicMiddleware({
  dependencies: {},
});

const createAppStore = () => {

  const finalStore = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
      epicMiddleware,
      loggerMiddleware,
    ),
    reducer: {
      currentModule,
      operations,
    },
  });

  // config the epic middleware to run our epic
  epicMiddleware.run(rootEpic);


  return finalStore;
};


export default createAppStore();