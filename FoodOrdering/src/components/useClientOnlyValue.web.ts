import React from 'react';

// `useEffect` is not invoked during server rendering, meaning
// we can use this to determine if we're on the server or not.
export function useClientOnlyValue<S, C>(server: S, client: C): S | C {
  const [value, setValue] = React.useState<S | C>(server); // Define a state variable called value using react useState hook and initialize with server value.
  React.useEffect(() => {  // Define an effect hook that runs depending on the client value.
    setValue(client); // when the client value changes, set the value to the new value
  }, [client]);

  return value; //return the new value either as a client value or server value
}
