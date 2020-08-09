// createOrder accept (order) as a parameter. Like other thunk based actions, we need to 
// pass dispatch as a parameter.
// inside the function, we first send an ajax request to the server to create an order.
// this is done by the fetch method. body: JSON.stringify(order) converts a JavaScript object of 
// value to a JSON string, because when sending data to the server, the data has to be a string.
// res.json() sends a JSON response. Then, we dispatch an action to the reducer where the payload
// is this data.
// Next, clean the shopping cart local storage - localStorage.clear("cartItems");
// Next, dispatch CLEAR_CART action to clear the cart items.


import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER} from "../types.js";

export const createOrder = (order) => (dispatch) => {
    fetch("/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    })
    .then((res) => res.json())
    .then((data) => {
        dispatch({type: CREATE_ORDER, payload: data});
        localStorage.clear("cartItems");
        dispatch({type: CLEAR_CART})
    });
};

export const clearOrder = () => (dispatch) => {
    dispatch({ type:CLEAR_ORDER });
};