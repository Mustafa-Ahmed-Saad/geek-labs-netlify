import Filters from "../../filters/Filters";
import AlertDetails from "../../alertDetails/AlertDetails";

const Alerts = () => (
  <div className="container">
    <div className="second-bg-color rounded-10 mt-2 py-4 px-1 px-md-5">
      <div className="row gx-4">
        <div className="col-12 col-lg-3">
          <Filters />
        </div>
        <div className="col-12 col-lg-9 mt-5 mt-lg-0">
          <AlertDetails />
        </div>
      </div>
    </div>
  </div>
);

export default Alerts;
