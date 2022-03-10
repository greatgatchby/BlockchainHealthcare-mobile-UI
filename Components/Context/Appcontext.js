import React, {useState, useEffect} from 'react';

export const AppContext = React.createContext(undefined);

/**
 * Provides a global application context for the entire application with the cart contents
 */
export const AccessProvider = props => {
  const [accessRequest, setAccessRequest] = useState({
    institution: '',
    terms: '',
    state: false,
  });
  const [requestError, setRequestError] = useState(null);
  return (
    <AppContext.Provider value={[accessRequest, setAccessRequest]}>
      {props.children}
    </AppContext.Provider>
  );
};
