
// the fetchActions returns a new function. This function accepts a dispatch.
// res will contain the list of products.
import { FETCH_PRODUCTS } from "../types";

// dispatch accepts an object that contains 2 values: type and payload
// json function returns a promise, therefore we need an await
export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};
