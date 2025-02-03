import { useState } from "react";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Header.css";
import { Navbar } from "./Navbar";

export const Header = () => {
  const options = ["English", "Hindi", "Gujarati"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
    <div className="main main_header">
      <div className="header_container">
        <p className="header_paragraph">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p>
        <p>Shop Now</p>
      </div>

      <ReactDropdown
        options={options}
        onChange={(option) => setSelectedOption(option.value)}
        value={selectedOption}
        placeholder="Select an option"
        className="dropdown"
      />
    </div>
    <Navbar />
    </>
  );
};
