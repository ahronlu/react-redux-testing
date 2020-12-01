const async = ({ dispatch }) => (next) => (action) => {
  // Check to see if the action
  // has a promise on its "payload" property
  // If it does, then wait for it to resolve
  // if it doesn't, then send the action on to the
  // next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // wait for the promise to resolve
  // and then create a new action
  // with that data and dispatch it
  action.payload.then((response) => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};

export default async;
