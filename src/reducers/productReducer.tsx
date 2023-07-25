import { produce } from "immer";

const initialState = {
  products: [
    {
      id: 1,
      name: "MVC",
      price: 100,
    },
    {
      id: 2,
      name: "Tokyo",
      price: 200,
    },
    {
      id: 3,
      name: "BM",
      price: 300,
    },
  ],
};
export const productReducer = (state = initialState, action: any) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      // FETCHING
      case "product/fetchingSuccess":
        draftState.products = action.payload;
        break;

      // ADD
      case "product/addProduct":
          draftState.products.push(action.payload);
          break;
      case "product/updateProduct":
          const product = action.payload
          draftState.products = state.products.map((item: any) => item.id === product.id ? product : item)
          // draftState.products[product.id] = product;
          break;
      case "product/deleteProduct":
        const {id} = action.payload;

        
        draftState.products = state.products.filter((item: any) => item.id !== id)
          break;
      default:
        return state;
    }
  });
};
