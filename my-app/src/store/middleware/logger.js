export const loggerMiddleware = store => next => action => {
    const tempTraceId = action.traceId;
    console.log(`[action] type:${action.type} with traceId: ${tempTraceId} in time: ${new Date()} with payload: ${JSON.stringify(action.payload)}`);
    let result = next(action);
    // action.traceId = traceId;
    // console.log('inspect result', result);
    result = { ...result, traceId: tempTraceId  };
    return result;
};
