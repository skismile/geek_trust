import { createContext, useReducer } from "react";

import { reducer } from "./reducer";

export const AppContext = createContext();
const initial = {
  products: [],
  cart: [],
  searchData: [],
  loading: false,
  filteredItem: [],
};

export function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
}
