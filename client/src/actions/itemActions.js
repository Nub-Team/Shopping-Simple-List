import axios from "axios";
export const GET_ITEMS = "GET_ITEMS";
export const IS_LOADING = "IS_LOADING";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const getItems = () => (dispatch) => {
  dispatch({ type: IS_LOADING });
  axios.get("/api/items").then((res) =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    })
  );
};

export const addItem = (name) => (dispatch) => {
  axios.post("/api/items", { name }).then((res) => {
    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    });
  });
};

export const deleteItem = (id) => (dispatch) => {
  axios.delete(`/api/items/${id}`).then(() => {
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
  });
};
