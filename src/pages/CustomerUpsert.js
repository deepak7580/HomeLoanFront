import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCustomerAction, updateCustomerAction } from "../redux/store";
import { AppNav } from "./AppNav";
import { AppFooter } from "./AppFooter";

export const CustomerUpsert = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("UpdateRef", state.updateRef);

  const [aadharNumber, setAadharNumber] = useState(
    state.updateRef.aadharNumber
  );
  const [customerName, setCustomerName] = useState(
    state.updateRef.customerName
  );
  const [dateOfBirth, setDateOfBirth] = useState(state.updateRef.dateOfBirth);
  const [email, setEmail] = useState(state.updateRef.email);
  const [gender, setGender] = useState(state.updateRef.gender);
  const [mobileNumber, setMobileNumber] = useState(
    state.updateRef.mobileNumber
  );
  const [nationality, setNationality] = useState(state.updateRef.nationality);
  const [panNumber, setPanNumber] = useState(state.updateRef.panNumber);
  const [userId, setUserId] = useState(state.updateRef.user?.userId);
  // const [role, setRole] = useState("");

  // const updateRole = (e) => setRole(e.target.value);
  const updateAadharNumber = (e) => setAadharNumber(e.target.value);

  const updateCustomerName = (e) => setCustomerName(e.target.value);
  const updateDateOfBirth = (e) => setDateOfBirth(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateGender = (e) => setGender(e.target.value);
  const updateMobileNumber = (e) => setMobileNumber(e.target.value);
  const updateNationality = (e) => setNationality(e.target.value);
  const updatePanNumber = (e) => setPanNumber(e.target.value);
  const updateUserId = (e) => setUserId(e.target.value);

  const addNewCustomer = () => {
    dispatch(
      createCustomerAction({
        aadharNumber,
        customerName,
        dateOfBirth,
        email,
        gender,
        mobileNumber,
        nationality,
        panNumber,
        user: {
          userId,
          // role,
        },
      })
    );
    // clear the form
    // setFirstName("");
    // setLastName("");
    // setUserName("");
    // setPassword("");
    // setEmail("");
    // setMobile("");
  };
  const updateCustomer = () => {
    dispatch(
      updateCustomerAction({
        customerId: state.updateRef.customerId,
        aadharNumber,
        customerName,
        dateOfBirth,
        email,
        gender,
        mobileNumber,
        nationality,
        panNumber,
        user: {
          userId,
          role: state.updateRef.user.role,
          password: state.updateRef.user.password,
        },
      })
    );
  };

  return (
    <div>
      <AppNav />
      <div className="alert alert-secondary ">
        {/* <h3>Register as Customer</h3> */}
        {state.updateRef.customerId ? (
          <h3>Customer Update</h3>
        ) : (
          <h3>Customer Register</h3>
        )}
      </div>
      <div className="container  pt-1 pb-5 w-50 ">
        <form className="mx-4 alert alert-primary">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>aadhar :</h4>
            </label>
            <input
              type="text"
              value={aadharNumber}
              onChange={updateAadharNumber}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter your aadhar number"
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Name :</h4>
            </label>
            <input
              type="text"
              value={customerName}
              onChange={updateCustomerName}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter your customer name"
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>D.O.B :</h4>
            </label>
            <input
              type="text"
              value={dateOfBirth}
              onChange={updateDateOfBirth}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter Date of Birth"
            />

            {/* <input
              type="date"
              name="begin"
              placeholder="dd-mm-yyyy"
              value=""
              min="1997-01-01"
              max="2030-12-31"
            /> */}
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Email :</h4>
            </label>
            <input
              type="text"
              value={email}
              onChange={updateEmail}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Gender :</h4>
            </label>
            <input
              type="text"
              value={gender}
              onChange={updateGender}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter your gender"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Mobile no :</h4>
            </label>
            <input
              type="text"
              value={mobileNumber}
              onChange={updateMobileNumber}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter Mobile number"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Nationality :</h4>
            </label>
            <input
              type="text"
              value={nationality}
              onChange={updateNationality}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter your nationality"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Pancard No :</h4>
            </label>
            <input
              type="text"
              value={panNumber}
              onChange={updatePanNumber}
              className="form-control form-control-lg mb-1  col-sm-7"
              placeholder="Enter your pan"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>UserId :</h4>
            </label>
            <input
              type="text"
              value={userId}
              onChange={updateUserId}
              className="form-control form-control-lg mb-1  col-sm-7"
              placeholder="Enter userid"
            />
          </div>
          {/* <div>
            <input
              type="text"
              value={role}
              onChange={updateRole}
              className="form-control form-control-lg mb-1"
              placeholder="Enter Your role id"
            />
          </div> */}

          <div>
            {state.updateRef.customerId ? (
              <input
                type="button"
                // onClick={addNewEmployee}
                onClick={updateCustomer}
                value="Update Employee"
                className="btn btn-lg btn-secondary w-100"
              />
            ) : (
              <input
                type="button"
                onClick={addNewCustomer}
                value="Add Employee"
                className="btn btn-lg btn-secondary w-100"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
