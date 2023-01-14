import { createContext, useReducer } from "react";
import {
  ADDTOCART,
  CARTITEMDECREMENT,
  CARTITEMINCREMENT,
  DELETECARTITEM,
  GETDATA,
  LOADING,
  SEARCH,
} from "./Actiontype";

export const AppContext = createContext();
const initial = {
  products: [],
  cart: [],
  searchData:[],
  loading:false
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case GETDATA:
      return { ...state, products: [...payload],searchData:[...payload],loading:false};
    case ADDTOCART:
      return { ...state, cart: [...state.cart, payload] };
    case CARTITEMINCREMENT: {
      let data = state.cart.map((ele) => {
        return ele.id == payload ? { ...ele, quantity: ele.quantity + 1 } : ele;
      });
      console.log(data);
      return { ...state, cart: [...data] };
    }
    case CARTITEMDECREMENT: {
      let data = state.cart.map((ele) => {
        return ele.id == payload ? { ...ele, quantity: ele.quantity - 1 } : ele;
      });
      console.log(data);
      return { ...state, cart: [...data] };
    }

    case SEARCH:{
        let data=state.products.filter((ele)=>{

            return ele.name==payload?ele:ele.type==payload?ele:ele.color==payload?ele:null
        })
        console.log(payload)
        if(payload=="")
        {
            return {...state,searchData:[...state.products],loading:false}
        }
        return {...state,searchData:[...data],loading:false}
    }
    case LOADING:return {...state,loading:true}
case DELETECARTITEM:{

let data=state.cart.filter((ele)=>{
    return ele.id!=payload
})

return {...state,cart:[...data]}


}
    default : return state
  }
};
export function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
}
