import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoLayersOutline } from "react-icons/io5";

export default function CustomSelect({ label, placeholder, message, options }) {
  const oldPlaceholder = placeholder;
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState(placeholder || "not Select");

  const handleDropdown = () => setIsSelected((prev) => !prev);

  const handleValue = (e) => {
    const currentValue = e.target.getAttribute("value");
    if (currentValue != null) {
      setValue(currentValue);
    }
  };

  return (
    <>
      <div
        className="dropdown mt-3 Poppins-font fs-13"
        onClick={handleDropdown}
      >
        <div className="Poppins-font text-white">{label}</div>
        <div className="select">
          <div className="selected">
            <IoLayersOutline className="fs-5 me-2" />
            <span>{value}</span>
          </div>
          <div className={`caret ${isSelected ? "caret-rotate" : ""}`}>
            <IoIosArrowDown />
          </div>
        </div>
        <ul
          className={`menu ${isSelected ? "menu-open" : ""}`}
          onClick={handleValue}
        >
          {options.map((option, i) => (
            <li key={i} value={option.value} className={option.classes}>
              {option.icon ? option.icon : null} {option.value}
            </li>
          ))}
        </ul>
      </div>
      {value === oldPlaceholder ? (
        <div className="text-6b fs-11 mt-1">{message}</div>
      ) : null}
    </>
  );
}
