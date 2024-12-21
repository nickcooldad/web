import { unsubscribe } from "diagnostics_channel";
import {createContext, useEffect, useState} from "react";
import { useContext } from "react";
const context = createContext();
const ContextProvider = context.Provider;

export const Provider = ({ children, store }) => {
  return (
    <ContextProvider value={store}>
      {children}
    </ContextProvider>
  )
};

export const useSelector = (fn) => {
  const {getState, subscribe} = useContext(context)

  const [state, setState] = useState(getState())
  console.log(">>>>", state);

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setState(fn(getState))
    })

    return unsubscribe;
  }, [])
 
  return state
}

export const useDispatch = () => {
  return useContext(context).dispatch
}
