import Tab from "../tab/Tab";
import "./MainTabs.css";

const MainTabs = () => (
  <div className="main-tabs">
    <div className="container">
      <div className="tabs d-flex align-items-center justify-content-center second-bg-color rounded-12 py-1 py-sm-2 py-md-4">
        <Tab
          text="Trading"
          badge={true}
          navTo="trading"
          pipe={true}
          classes={"fs-2-5 fw-bold"}
        />
        <Tab
          text="Automation"
          badge={true}
          navTo="automation"
          pipe={true}
          classes={"fs-2-5 fw-bold"}
        />
        <Tab
          text="Portfolio"
          badge={true}
          navTo="portfolio"
          pipe={true}
          classes={"fs-2-5 fw-bold"}
        />
        <Tab
          text="Alerts"
          badge={false}
          navTo="alerts"
          pipe={true}
          classes={"fs-2-5 fw-bold"}
        />
        <Tab
          text="Training"
          badge={false}
          navTo="training"
          pipe={false}
          classes={"fs-2-5 fw-bold"}
        />
      </div>
    </div>
  </div>
);

export default MainTabs;
