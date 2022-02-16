import { createSlice, createAction } from '@reduxjs/toolkit';

export const operations = createSlice({
  name: 'operations',
  initialState: {
    operationsInProgress: {},
  },
  reducers: {
    setOperationInProgress: (state, action) => {
        state = {
          ...state,
          operationsInProgress: {
            ...state.operationsInProgress,
            [action.payload.operationName]: true,
          },
        };
        return state;
    },
    cancelOperationInProgress: (state, action) => {
      state = {
        ...state,
        operationsInProgress: {
          ...state.operationsInProgress,
          [action.payload.operationName]: false,
        },
      };
      return state;
    },
  },
});

export const triggerStopAll = createAction('operation/stopAll');

// Action creators are generated for each case reducer function
export const { setOperationInProgress, cancelOperationInProgress } = operations.actions;

export default operations.reducer;