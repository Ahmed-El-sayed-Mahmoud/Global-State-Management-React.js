export const InitialState = {
  total: 0,
  products: [],
};

const shopReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, products: [...state.products,action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: state.products.filter((e) => e.name !== action.payload.name),
      };
    case "UPDATE_PRICE":
      return { ...state, total: action.op===1?state.total+action.payload: state.total-action.payload};

    default:
      return state;
  }
};
export default shopReducer
