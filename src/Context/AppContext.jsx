import { createContext, useReducer } from "react";
import { ADDTOCART, GETDATA } from "./Actiontype";



export const AppContext=createContext()
const initial={
    products:[],
    cart:[]
}
const reducer=(state,{type,payload})=>{
switch(type){

case GETDATA:return {...state,products:[...payload]}
case ADDTOCART:return {...state,cart:[...state.cart,payload]}


}
}
export function AppContextProvider({children}){


    const [state, dispatch] = useReducer(reducer, initial);



return<AppContext.Provider  value={{dispatch,state}} >{children}</AppContext.Provider>


}