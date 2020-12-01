export default ({ dispatch }) => (next) => (action) => {
  // Check to see if the action
  // has a promise on its "payload" property
  // If it does, then wait for it to resolve
  // if it doesn't, then send the action on to the
  // next middleware
};
