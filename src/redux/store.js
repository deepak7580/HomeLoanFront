import { applyMiddleware, createStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  customerList: {},
  customerId: {},
  progress: false,
  // AUTH FAILS => TRUE
  authFailure: false,
  authSuccess: false,
  updateRef: {},
  updateLoan: {},
  loanList: {},
  aggrementList: undefined,
  ApplicationList: {},
};
//action type
const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";
const AUTH_FAILURE_ACTION_TYPE = "AUTH_FAILURE_ACTION_TYPE";
const AUTH_SUCCESS_ACTION_TYPE = "AUTH_SUCCESS_ACTION_TYPE";
const LOAN_APPLICATION_GET_ALL_ACTION_TYPE =
  "LOAN_APPLICATION_GET_ALL_ACTION_TYPE";

const APPLICATION_UPDATE_RENDER_ACTION_TYPE =
  "APPLICATION_UPDATE_RENDER_ACTION_TYPE";

const LOAN_APPLICATION_GET_SUCCESS = "LOAN_APPLICATION_GET_SUCCESS";
//
const CUSTOMER_UPDATE_RENDER_ACTION_TYPE = "CUSTOMER_UPDATE_RENDER_ACTION_TYPE";
//
const CUSTOMER_GET_ALL_ACTION_TYPE = "CUSTOMER_GET_ALL_ACTION_TYPE";
const CUSTOMER_GET_BY_ID_ACTION_TYPE = "CUSTOMER_GET_BY_ID_ACTION_TYPE";
const CUSTOMER_CREATE_ACTION_TYPE = "CUSTOMER_CREATE_ACTION_TYPE";
const CUSTOMER_UPDATE_ACTION_TYPE = "CUSTOMER_UPDATE_ACTION_TYPE";
const CUSTOMER_DELETE_ACTION_TYPE = "CUSTOMER_DELETE_ACTION_TYPE";

//actions
export const getAllCustomerAction = () => {
  return async (dispatch) => {
    let userRef = JSON.parse(localStorage.getItem("customerId"));
    console.log(userRef.userId);

    localStorage.getItem("customerList");
    // const url = `http://localhost:8080/customer/viewCustomer/`;
    const url = `http://localhost:8080/customer/view1/${userRef.userId}`;
    const response = await axios.get(url);
    console.log(response.data);

    console.log(response.data);
    dispatch({ type: "CUSTOMER_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};

export const getAllLoanAction = () => {
  return async (dispatch) => {
    let loanRef = JSON.parse(localStorage.getItem("loanId"));
    if (loanRef != null) {
      const url = `http://localhost:8080/view/${loanRef.applicationId}`;
      const response = await axios.get(url);
      console.log(response.data);

      dispatch({
        type: "LOAN_APPLICATION_GET_ALL_ACTION_TYPE",
        payload: response.data,
      });
    } else {
      alert("please apply first!!1");
    }

    // const url = `http://localhost:8080/customer/viewCustomer/`;
  };
};

export const createCustomerAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080/customer/addCustomer`;
    await axios.post(url, payload);
    console.log(payload);
    // update the ui. TODO
  };
};

export const createApplication = (payload) => {
  return async (dispatch) => {
    console.log("i am in create application method");
    console.log("loan id", payload);
    const url = `http://localhost:8080/Agreement/addLoanAgreement`;
    const response = await axios.post(url, payload);

    console.log("agreement api called", response.data);
    dispatch({
      type: "LOAN_APPLICATION_GET_SUCCESS",
      payload: response.data,
    });
  };
};

export const createApplyLoan = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080/addLoan`;
    console.log(url);

    const response = await axios.post(url, payload);
    localStorage.setItem("loanId", JSON.stringify(response.data));

    let loanRef = JSON.parse(localStorage.getItem("loanId"));
    console.log("loan id he ye", loanRef.applicationId);
    // console.log(payload);
    console.log(response.data);
    // update the ui. TODO
  };
};

export const authenticateUserAction = (payload) => {
  return async (dispatch) => {
    // API CALL :: VERIFICATION
    const url = `http://localhost:8080/signIn`;
    const response = await axios.post(url, payload);

    if (response.data !== "") {
      // VALID USER
      // updat the UI:: THIS IS TRICKY
      //console.log("I am authenticated");
      // console.log(response.data);

      dispatch({ type: AUTH_SUCCESS_ACTION_TYPE, payload: true });
      localStorage.setItem("authSuccess", "1");
      localStorage.setItem("customerId", JSON.stringify(response.data));

      const url = `http://localhost:8080/view/customer`;
      const response1 = await axios.post(url, payload);
      if (response1.data !== "") {
        // dispatch({ type: AUTH_SUCCESS_ACTION_TYPE, payload: response.data });
        localStorage.setItem("loanId", JSON.stringify(response1.data));
      }

      // NOT DOING THE ACTIVITY OF 5 SECONDS :: page will be redirected to anohter page.
    } else {
      // INVALID USER :: AUTH FAILS
      // updat the UI:: THIS IS TRICKY
      console.log("I am not authenticated");
      dispatch({ type: AUTH_FAILURE_ACTION_TYPE, payload: true });

      setTimeout(() => {
        dispatch({ type: AUTH_FAILURE_ACTION_TYPE, payload: false });
      }, 5000);
    }
  };
};

export const updateCustomerAction = (payload) => {
  return async (dispatch) => {
    // making the server call.
    const url = `http://localhost:8080/customer/update/${payload.customerId}`;
    await axios.put(url, payload);

    // making the uref empty again.
    updateRenderAction({}); //applicationRenderAction

    // update the ui. TODO
    // dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    // after 5 second PROGRESS :: FALSE AGAIN
    // setTimeout(() => {
    //   dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    // }, 5000);
  };
};

export const updateLoanAction = (payload) => {
  console.log("hiiiiiiii", payload.applicationId);
  console.log("hiiiiiiii22", payload.loanApprovedAmount);
  return async (dispatch) => {
    // making the server call.
    // const url = `http://localhost:8080/update/${payload.applicationId}`;
    const url = `http://localhost:8080/update`;
    await axios.put(url, payload);

    // making the uref empty again.
    // updateRenderAction({}); //applicationRenderAction
    ApplicationRenderAction({});
  };
};

export const signOutAction = () => {
  return async (dispatch) => {
    console.log("signout");
    localStorage.removeItem("authSuccess");
    localStorage.removeItem("loanId");
    localStorage.removeItem("customerId");

    dispatch({ type: AUTH_SUCCESS_ACTION_TYPE, payload: false });
  };
};
//

export const updateRenderAction = (payload) => {
  // ONLY UPDATEING THE UI
  // 5
  return { type: CUSTOMER_UPDATE_RENDER_ACTION_TYPE, payload: payload };
};

export const ApplicationRenderAction = (payload) => {
  // ONLY UPDATEING THE UI
  // 5
  return { type: APPLICATION_UPDATE_RENDER_ACTION_TYPE, payload: payload };
};

//

function CustomerReducer(state = initState, action) {
  switch (action.type) {
    case CUSTOMER_GET_ALL_ACTION_TYPE:
      return { ...state, customerList: action.payload };
    case AUTH_FAILURE_ACTION_TYPE:
      return { ...state, authFailure: action.payload };
    case AUTH_SUCCESS_ACTION_TYPE:
      return { ...state, authSuccess: action.payload };
    case CUSTOMER_UPDATE_RENDER_ACTION_TYPE:
      return { ...state, updateRef: action.payload };
    case LOAN_APPLICATION_GET_ALL_ACTION_TYPE:
      return { ...state, loanList: action.payload };
    case LOAN_APPLICATION_GET_SUCCESS:
      return { ...state, aggrementList: action.payload };
    case APPLICATION_UPDATE_RENDER_ACTION_TYPE:
      return { ...state, updateLoan: action.payload };

    default:
      return state;
  }

  return state;
}

//applied middleware for async operation
const store = createStore(CustomerReducer, applyMiddleware(thunk));
export { store };
