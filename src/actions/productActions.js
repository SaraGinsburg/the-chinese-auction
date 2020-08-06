
// the fetchActions returns a new function. This function accepts a dispatch.
// res will contain the list of products.
import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SEASON, ORDER_PRODUCTS_BY_PRICE } from "../types";

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


// filterProducts accepts 2 parameters, all the fetched products that come from the server, 
// and the season by which to filter the products.
// Because we are using react thunk, we are returning another function that has dispatch as a 
// parameter. It will dispatch an action that will change the redux store.
// An action is an object that has 2 values: type and payload.
// 
export const filterProducts = (products, season) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SEASON,
    payload: {
      season: season,
      items: 
        season === "" 
        ? products
        : products.filter((x) => x.availableSeasons.indexOf(season)>=0),
    }
  })
};

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === "latest") {
    sortedProducts.sort((a,b) => (a._id > b._id ? -1 : 1));
  } else {
    sortedProducts.sort((a,b) => 
     sort === "lowest" 
     ? (a.price < b.price ? -1 : 1)
     : (a.price < b.price ? 1 : -1)
    )
  }
  
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};


