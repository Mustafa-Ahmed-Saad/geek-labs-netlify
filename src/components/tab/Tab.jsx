import { NavLink } from "react-router-dom";

const Tab = ({ text, badge, navTo, pipe, classes }) => {
  return (
    <div className="flex-grow-1 text-center">
      <h2 className={`position-relative my-1 ${classes ? classes : ""}`}>
        {badge ? (
          <span className="cm-badge bg-main position-absolute top-0 start-50 translate-middle fs-11 px-1 rounded-10 no-wrap-words">
            coming soon
          </span>
        ) : null}

        {navTo ? (
          <NavLink
            className={`nav-link me-2 fw-medium rounded-3 p-0 p-sm-1 ${
              pipe ? "with-pipe" : ""
            }`}
            aria-current="page"
            to={`/${navTo}`}
          >
            {text}
          </NavLink>
        ) : (
          <div className={`${pipe ? "with-pipe" : ""}`}>{text}</div>
        )}
      </h2>
    </div>
  );
};

export default Tab;
