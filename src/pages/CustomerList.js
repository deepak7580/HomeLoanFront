import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomerAction, updateRenderAction } from "../redux/store";
import { AppNav } from "./AppNav";
import { AppFooter } from "./AppFooter";
import { useHistory } from "react-router-dom";

export const CustomerList = () => {
  const history = useHistory();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllCustomerAction()), []);
  const updateRecord = (customerList) => {
    console.log("Update Record", customerList);
    dispatch(updateRenderAction(customerList));
    history.push("/customer-upsert");
  };
  return (
    <div>
      <AppNav />
      <div className=" alert alert-secondary ">
        <h3 style={{ textAlign: "center", fontSize: "150" }}> My Details</h3>
      </div>
      <table className="table ml-10">
        <thead className="thead-dark">
          <tr>
            <th scope="col">customer_id</th>
            <th scope="col">aadhar_number</th>
            <th scope="col">customer_name</th>
            <th scope="col">dob</th>
            <th scope="col">email</th>
            <th scope="col">gender</th>
            <th scope="col">mobile_number</th>
            <th scope="col">nationality</th>
            <th scope="col">pan_number</th>
            <th scope="col">user_id</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody className="alert alert-primary">
          <tr>
            <td>{state.customerList.customerId}</td>
            <td>{state.customerList.aadharNumber}</td>
            <td>{state.customerList.customerName}</td>
            <td>{state.customerList.dateOfBirth}</td>
            <td>{state.customerList.email}</td>
            <td>{state.customerList.gender}</td>
            <td>{state.customerList.mobileNumber}</td>
            <td>{state.customerList.nationality}</td>
            <td>{state.customerList.panNumber}</td>
            <td>{state.customerList.user?.userId}</td>
            <td>
              <input
                type="button"
                value="update"
                className="btn btn-outline-secondary btn-sm"
                onClick={() => updateRecord(state.customerList)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <AppFooter />
    </div>
  );
};
