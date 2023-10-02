import { useContext } from "react";
import { createContext } from "react";

const contextStore = createContext();

export const useContextStore = () => {
  return useContext(contextStore);
};
const ContextProvider = contextStore.Provider;

export default ContextProvider;
