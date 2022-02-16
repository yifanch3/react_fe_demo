export const loggerMiddleware = store => next => action => {
    console.log(`[action] type:${action.type} in time: ${new Date()} with payload: ${JSON.stringify(action.payload)}`);
    next(action);
};
