import {
  ADDTOCART,
  CARTITEMDECREMENT,
  CARTITEMINCREMENT,
  DELETECARTITEM,
  FILTERBYPRICE,
  FILTERCOLOR,
  FILTERGENDER,
  FILTERTYPE,
  GETDATA,
  LOADING,
  SEARCH,
} from "./Actiontype";
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case GETDATA:
      return {
        ...state,
        products: [...payload],
        searchData: [...payload],
        filteredItem: [...payload],
        loading: false,
      };
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

    case SEARCH: {
      let data = state.products.filter((ele) => {
        return ele.name == payload
          ? ele
          : ele.type == payload
          ? ele
          : ele.color == payload
          ? ele
          : null;
      });
      console.log(payload);
      if (payload == "") {
        return {
          ...state,
          searchData: [...state.products],
          filteredItem: [...state.products],
          loading: false,
        };
      }
      return {
        ...state,
        searchData: [...data],
        filteredItem: [...data],
        loading: false,
      };
    }
    case LOADING:
      return { ...state, loading: true };
    case DELETECARTITEM: {
      let data = state.cart.filter((ele) => {
        return ele.id != payload;
      });

      return { ...state, cart: [...data] };
    }

    case FILTERCOLOR: {
      if (payload.length == 0) {
        return {
          ...state,
          filteredItem: [...state.searchData],
          loading: false,
        };
      }
      let newData = state.searchData.filter((ele) => {
        return payload.includes(ele.color);
      });

      return { ...state, filteredItem: [...newData], loading: false };
    }

    case FILTERGENDER: {
      if (payload.length == 0) {
        return {
          ...state,
          filteredItem: [...state.searchData],
          loading: false,
        };
      }
      let newData = state.searchData.filter((ele) => {
        return payload.includes(ele.gender);
      });

      return { ...state, filteredItem: [...newData], loading: false };
    }

    case FILTERTYPE: {
      if (payload.length == 0) {
        return {
          ...state,
          filteredItem: [...state.searchData],
          loading: false,
        };
      }
      let newData = state.searchData.filter((ele) => {
        return payload.includes(ele.type);
      });

      return { ...state, filteredItem: [...newData], loading: false };
    }

    case FILTERBYPRICE: {
      console.log(payload);
      if (payload == 250) {
        let newData = state.searchData.filter((ele) => {
          return ele.price <= 250;
        });
        return { ...state, loading: false, filteredItem: [...newData] };
      } else if (payload >= 251 && payload <= 450) {
        let newData = state.searchData.filter((ele) => {
          return ele.price <= 450 && ele.price >= 251;
        });
        return { ...state, loading: false, filteredItem: [...newData] };
      } else {
        let newData = state.searchData.filter((ele) => {
          return ele.price >= 451;
        });
        return { ...state, loading: false, filteredItem: [...newData] };
      }
    }

    default:
      return state;
  }
};
