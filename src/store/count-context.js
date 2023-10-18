import React from 'react';

const CountContext = React.createContext({
  incomplete: '',
  passes: '',
  violations: '',
  inapplicable: '',
});

export default CountContext;

export const CountContextProvider = (props) => {
  return (
    <CountContext.Provider value={CountContext}>
      {props.children}
    </CountContext.Provider>
  );
};
