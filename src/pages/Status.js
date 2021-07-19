import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AppNav } from "./AppNav";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllLoanAction,
  createApplication,
  ApplicationRenderAction,
} from "../redux/store";
import { useHistory } from "react-router-dom";

export function Status() {
  const history = useHistory();
  const { aggrementList, loanList } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllLoanAction()), []);
  const [applicationId, setApplicationId] = useState("");
  const updateApplicationId = (e) => setApplicationId(e.target.value);
  console.log("phele", aggrementList);
  const AddApplication = () => {
    dispatch(
      createApplication({
        loanApplication: {
          applicationId,
        },
      })
    );
  };

  const updateLoan = (loanList) => {
    // console.log("Update Record", customerList);
    dispatch(ApplicationRenderAction(loanList));
    history.push("/apply-loan");
  };
  return (
    <div>
      <AppNav />
      <h1>I am in status page</h1>
      <table className="table ml-10">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ApplicationId</th>
            <th scope="col">admin_approval</th>
            <th scope="col">application_date</th>
            <th scope="col">finance_approval</th>
            <th scope="col">land_approval</th>
            <th scope="col">applied_amount</th>
            <th scope="col">approved_amount</th>
            <th scope="col">monthly_expense</th>
            <th scope="col">other_expense</th>
            <th scope="col">rate_of_interest</th>
            <th scope="col">tenure</th>
            <th scope="col">annual_income</th>
            <th scope="col">customer_id</th>
            <th scope="col">status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="alert alert-primary">
          <tr>
            <td>{loanList.applicationId}</td>
            <td>{loanList.adminApproval?.toString()}</td>
            <td>{loanList.applicationDate}</td>
            <td>{loanList.finananceVerificationApproval?.toString()}</td>
            <td>{loanList.landVerificationApproval?.toString()}</td>
            <td>{loanList.loanAppliedAmount}</td>
            <td>{loanList.loanApprovedAmount}</td>
            <td>{loanList.monthlyExpenses}</td>
            <td>{loanList.otherMonthlyExpenses}</td>
            <td>{loanList.rateOfInterest}</td>
            <td>{loanList.tenure}</td>
            <td>{loanList.totalAnnualIncome}</td>
            <td>{loanList.customer?.customerId}</td>
            <td>{loanList.status}</td>

            {/* <td>{ customerList.user?.userId}</td> */}
            <td>
              <input
                type="button"
                value="update"
                className="btn btn-outline-secondary btn-sm"
                onClick={() => updateLoan(loanList)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
      <div>
        <label>Enter your Loan Application Id:-</label>
        <input
          type="text"
          placeholder="Application Id"
          onChange={updateApplicationId}
        />
        <input type="button" value="View" onClick={AddApplication} />
      </div>
      {aggrementList && (
        <table className="table ml-10">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Loan Agreement</th>
              <th scope="col">Due Date</th>
              <th scope="col">Loan Amount</th>
              <th scope="col">Emi Amount</th>
              <th scope="col">Interset Amount</th>
            </tr>
          </thead>
          <tbody className="alert alert-primary">
            <tr>
              <td>{aggrementList.loanAgreementId}</td>
              <td>{aggrementList.emi?.dueDate}</td>
              <td>{aggrementList.emi?.loanAmount}</td>
              <td>{aggrementList.emi?.emiAmount}</td>
              <td>{aggrementList.emi?.interestAmount}</td>

              {/* <td>{ customerList.user?.userId}</td> */}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
