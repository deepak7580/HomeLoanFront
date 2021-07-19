import { AppNav } from "./AppNav";
import { AppFooter } from "./AppFooter";
import { MDBRangeInput } from "mdbreact";
import Slider from "@material-ui/core/Slider";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createApplyLoan, updateLoanAction } from "../redux/store";

export const ApplyLoan = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("heloooooooooo", state.updateLoan);
  const [tenure, setTenure] = React.useState(state.updateLoan.tenure);
  const [customerId, setCustomerId] = useState(
    state.updateLoan.customer?.customerId
  );
  const [loanAppliedAmount, setLoanAppliedAmount] = useState(
    state.updateLoan.loanAppliedAmount
  );

  const [applicationDate, setApplicationDate] = useState(
    state.updateLoan.applicationDate
  );
  const [totalAnnualIncome, setTotalAnnualIncome] = useState(
    state.updateLoan.totalAnnualIncome
  );
  const [monthlyExpenses, setMonthlyExpenses] = useState(
    state.updateLoan.monthlyExpenses
  );
  const [otherMonthlyExpenses, setOtherMonthlyExpenses] = useState(
    state.updateLoan.otherMonthlyExpenses
  );
  const [rateOfInterest, setRateOfInterest] = useState(
    state.updateLoan.rateOfInterest
  );

  const updateCustomerId = (e) => setCustomerId(e.target.value);
  const updateLoanAppliedAmount = (e) => setLoanAppliedAmount(e.target.value);
  const updateApplicationDate = (e) => setApplicationDate(e.target.value);
  const updateTotalAnnualIncome = (e) => setTotalAnnualIncome(e.target.value);
  const updateMonthlyExpenses = (e) => setMonthlyExpenses(e.target.value);
  const updateOtherMonthlyExpenses = (e) =>
    setOtherMonthlyExpenses(e.target.value);
  const updateRateOfInterest = (e) => setRateOfInterest(e.target.value);

  const addApplyLoan = () => {
    dispatch(
      createApplyLoan({
        applicationDate,
        // applicationId: state.updateLoan.applicationId,

        loanAppliedAmount,
        totalAnnualIncome,
        monthlyExpenses,
        otherMonthlyExpenses,
        rateOfInterest,
        tenure,

        customer: {
          customerId,
        },
      })
    );
  };

  const update = () => {
    dispatch(
      updateLoanAction({
        applicationDate,
        adminApproval: state.updateLoan.adminApproval,
        applicationId: state.updateLoan.applicationId,
        finananceVerificationApproval:
          state.updateLoan.finananceVerificationApproval,
        // landVerificationApproval: state.updateLoan.landVerificationApproval,
        landVerificationApproval: state.loanList.landVerificationApproval,
        loanApprovedAmount: state.loanList.loanApprovedAmount,
        loanAppliedAmount,
        totalAnnualIncome,
        monthlyExpenses,
        otherMonthlyExpenses,
        rateOfInterest,
        tenure,
        status: state.loanList.status,
        customer: {
          customerId,
          // aadharNumber: state.updateLoan.customer.aadharNumber,
          aadharNumber: state.customerList.aadharNumber,
          customerName: state.customerList.customerName,
          email: state.customerList.email,
          gender: state.customerList.gender,
          mobileNumber: state.customerList.mobileNumber,
          nationality: state.customerList.nationality,
          panNumber: state.customerList.panNumber,
          // dateOfBirth:
        },
      })
    );
  };

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setTenure(newValue);
    console.log(newValue);
  };
  return (
    <div>
      <AppNav />
      <div className="alert alert-secondary ">
        {state.updateLoan.applicationId ? (
          <h3> Update Loan</h3>
        ) : (
          <h3>Apply For Loan</h3>
        )}
      </div>
      <div className="container  pt-1 pb-5 w-50 ">
        <form className="mx-4 alert alert-primary">
          <div className="form-group row">
            <label className="col-sm-5 col-form-label">
              <h4>CustomerId :</h4>
            </label>
            <input
              type="text"
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter your customer Id"
              value={customerId}
              onChange={updateCustomerId}
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-5 col-form-label">
              <h4>Loan Ammount :</h4>
            </label>
            <input
              type="text"
              className="form-control form-control-lg mb-1 col-sm-7 "
              placeholder="Enter Loan Amount"
              value={loanAppliedAmount}
              onChange={updateLoanAppliedAmount}
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-5 col-form-label">
              <h4>Application Date :</h4>
            </label>
            <input
              type="text"
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter Date of application"
              value={applicationDate}
              onChange={updateApplicationDate}
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-5 col-form-label">
              <h4>Annual Income :</h4>
            </label>
            <input
              type="text"
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter Annual Income"
              value={totalAnnualIncome}
              onChange={updateTotalAnnualIncome}
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-5 col-form-label">
              <h4>Monthly Expenses :</h4>
            </label>
            <input
              type="text"
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter monthly expense"
              value={monthlyExpenses}
              onChange={updateMonthlyExpenses}
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-5 col-form-label">
              <h4>Other Expenses :</h4>
            </label>
            <input
              type="text"
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter other monthly expense"
              value={otherMonthlyExpenses}
              onChange={updateOtherMonthlyExpenses}
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-5 col-form-label">
              <h4>Interest Rate :</h4>
            </label>
            <input
              type="text"
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter other monthly expense"
              value={rateOfInterest}
              onChange={updateRateOfInterest}
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-5 col-form-label">
              <h4>Tenure :</h4>
            </label>
            {/* <select
              className="form-control form-control-lg mb-2 col-sm-7"
              required
            >
              <option value="admin" placeholder="Select Role">
                Admin
              </option>
              <option value="customer">Customer</option>
              <option value="landofficer">Land Officer</option>
              <option value="Financeofficer">Finance Officer</option>
            </select> */}
            <div
              style={{
                margin: "5px",
                display: "block",
                width: "350px",
              }}
            >
              <Slider
                min={1}
                max={15}
                value={tenure}
                onChange={rangeSelector}
                valueLabelDisplay="auto"
              />
              tenure you selected is {tenure}
            </div>
          </div>

          <div>
            {state.updateLoan.applicationId ? (
              <input
                type="button"
                // onClick={addNewEmployee}
                onClick={update}
                value="Update Loan"
                className="btn btn-lg btn-secondary w-100"
              />
            ) : (
              <input
                type="button"
                value="Apply for loan"
                className="btn btn-lg btn-dark w-100 mb-2"
                onClick={addApplyLoan}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
