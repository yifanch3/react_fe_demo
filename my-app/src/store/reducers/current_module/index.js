import { createSlice } from '@reduxjs/toolkit';

export const currentModule = createSlice({
  name: 'currentModule',
  initialState: {
    moduleCode: 0,
    moduleName: 'Map Terminal',
  },
  reducers: {
    switchModule: (state, action) => {
        state.moduleCode = action.payload.moduleCode;
        state.moduleName = action.payload.moduleName;
    },
  },
})

// Action creators are generated for each case reducer function
export const { switchModule } = currentModule.actions;

export default currentModule.reducer;