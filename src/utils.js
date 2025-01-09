


const toggleStateProperty = (state, setState, propertyStr, objectItemId) => {
  if (!state || (typeof state !== "object" && !Array.isArray(state))) {
    console.error("Invalid state: state should be an object or array");
    return;
  }

  if (!Array.isArray(state)) {
    setState((prevState) => ({
      ...prevState,
      [propertyStr]: !prevState[propertyStr],
    }));
  } else {
    setState((prevState) =>
      prevState.map((item) => {
        if (item.id === objectItemId) {
          return {
            ...item,
            [propertyStr]: !item[propertyStr],
          };
        }
        return {
            ...item,
            [propertyStr]: false,
          };;
      })
    );
  }
};

export { toggleStateProperty };
