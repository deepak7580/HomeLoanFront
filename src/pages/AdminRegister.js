import { AppNav } from "./AppNav";
export const AdminRegister = () => {
  return (

    <div>
      <AppNav />
      <div className="alert alert-secondary ">
        <h3>Register as Admin</h3>
      </div>
      <div
        className=" d-flex justify-content-center "
        style={{ height: "100vh" }}
      >
        <div className="w-50">
          <form className="mx-4 alert alert-primary">
            <div>
              <input
                type="text"
                className="form-control form-control-lg mb-1"
                placeholder="Enter your UserId"
              />
            </div>

            <div>
              <input
                type="text"
                className="form-control form-control-lg mb-1 "
                placeholder="Enter your name"
              />
            </div>

            <div>
              <input
                type="text"
                className="form-control form-control-lg mb-1"
                placeholder="Enter Your contact number"
              />
            </div>

            <div>
              <input
                type="button"
                // onClick={addNewCustomer}
                value="Register"
                className="btn btn-lg btn-dark w-100 mb-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
