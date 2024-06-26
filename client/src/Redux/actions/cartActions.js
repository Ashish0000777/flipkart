import axios from "axios";
import * as actionType from "../constants/cartConstants";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    let { data } = await axios.get(`https://flipkart-1-sw9k.onrender.com/product/${id}`);
    dispatch({
      type: actionType.ADD_TO_CART,
      payload: {...data, quantity },
    });
  } catch (error) {
    dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
};
