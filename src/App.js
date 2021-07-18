import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { CustomerList } from "./pages/CustomerList";
import { CustomerUpsert } from "./pages/CustomerUpsert";
import { AdminRegister } from "./pages/AdminRegister";
import { Nav, Navbar } from "react-bootstrap";
import { AppNav } from "./pages/AppNav";
import { ApplyLoan } from "./pages/ApplyLoan";
import { UserSignin } from "./pages/UserSignin";
import { FinanceOfficer } from "./pages/FinanceOfficer";
import { LandOfficer } from "./pages/LandOfficer";
import { AdminPage } from "./pages/Admin";
import { Status } from "./pages/Status";

function App() {
  let history = useHistory();

  const authSuccessFromStorage = localStorage.getItem("authSuccess");
  if (authSuccessFromStorage !== "1") {
    history.push("/user-signin");
  }
  return (
    <>
      {/* {authSuccessFromStorage === "1" && <AppNav />} */}
      <Route exact path="/" component={UserSignin} />
      <Route exact path="/AppNav" component={AppNav} />
      <Route exact path="/customer-upsert" component={CustomerUpsert} />
      <Route exact path="/customer-list" component={CustomerList} />
      <Route exact path="/admin-register" component={AdminRegister} />
      <Route exact path="/apply-loan" component={ApplyLoan} />
      <Route exact path="/financeOfficerPage" component={FinanceOfficer} />
      <Route exact path="/landOfficerPage" component={LandOfficer} />
      <Route exact path="/adminPage" component={AdminPage} />

      <Route exact path="/user-signin" component={UserSignin} />
      <Route exact path="/status" component={Status} />
    </>
  );
}

export default App;
