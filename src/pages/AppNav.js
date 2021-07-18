import { Nav, Navbar } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { AppFooter } from "./AppFooter";
import { signOutAction, updateRenderAction } from "../redux/store";
import { useDispatch } from "react-redux";

export const AppNav = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const signOut = () => {
    dispatch(signOutAction());

    // redirect the user to login page.
    history.push("/");
  };
  const clearCustomerURef = () => {
    dispatch(updateRenderAction({}));
    history.push("/customer-upsert");
  };

  return (
    <div>
      <Navbar variant="dark" expand="lg" style={{ background: "black" }}>
        <Navbar.Brand className="ml-5 text-light" as={Link} to="/">
          🏠Home Loan
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mx-auto " as={Link} to="/customer-list">
              My Details
            </Nav.Link>
            {/* <Nav.Link className="mx-auto " as={Link} to="/customer-upsert">
              Customer Register
            </Nav.Link> */}
            <Nav.Link onClick={clearCustomerURef}>Customer Register</Nav.Link>
            <Nav.Link className="mx-auto " as={Link} to="/status">
              Application Status
            </Nav.Link>
            <Nav.Link className="mx-auto " as={Link} to="/user-signin">
              <h6 className="ml-1" onClick={signOut} role="button">
                Sign out
              </h6>
            </Nav.Link>
            <Nav.Link className="mx-auto " as={Link} to="/admin-register">
              Admin Register
            </Nav.Link>
            <Nav.Link className="mx-auto " as={Link} to="/apply-loan">
              ApplyLoan
            </Nav.Link>
            {/* <Nav.Link className="mx-auto " as={Link} to="/user-signin">
              UserSignin
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppFooter />
    </div>
  );
};
