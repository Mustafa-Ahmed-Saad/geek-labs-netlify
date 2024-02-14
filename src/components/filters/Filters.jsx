import { FaRegCircleCheck } from "react-icons/fa6";

import CustomSelect from "../customSelect/CustomSelect";
import "./Filters.css";

const Filters = () => (
  <div className="bg-main-light rounded-12 px-3 py-4 filter">
    <h3 className="text-white text-center">Filters</h3>

    <CustomSelect
      label={"Industry"}
      placeholder={"Health care"}
      message={"Choose something."}
      options={[
        {
          value: "option 1",
        },
        {
          value: "option 2",
        },
        {
          value: "option 2",
        },
      ]}
    />

    <CustomSelect
      label={"Market Cap"}
      placeholder={"Large-cap"}
      message={"Press Apply to see changes."}
      options={[
        {
          value: "option 1",
        },
        {
          value: "option 2",
        },
        {
          value: "option 3",
        },
      ]}
    />

    <CustomSelect
      label={"Risk"}
      placeholder={"Insert text here"}
      options={[
        {
          value: "Low risk",
          icon: <FaRegCircleCheck className="fs-5 me-1" />,
          classes: "text-6b",
        },
        {
          value: "Mid-risk",
          icon: <FaRegCircleCheck className="fs-5 me-1" />,
          classes: "text-6b",
        },
        {
          value: "High risk",
          icon: <FaRegCircleCheck className="fs-5 me-1" />,
          classes: "text-main",
        },
        {
          value: "Option text here",
          icon: <FaRegCircleCheck className="fs-5 me-1" />,
          classes: "text-6c",
        },
      ]}
    />

    <button className="mt-3 btn btn-lg rounded-12 bg-main text-white w-100 fs-6 fw-bold py-1 py-sm-3">
      Apply Filters
    </button>
  </div>
);

export default Filters;
