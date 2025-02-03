// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import "./Navbar.css";
// import { IoIosSearch } from "react-icons/io";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { BsCart3 } from "react-icons/bs";
// import { GiHamburgerMenu } from "react-icons/gi";

// export const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);


//   const toggleMenu = () => {
//     setShowMenu((prev) => !prev);
//   };

//   return (
//     <div className="main">
//       <div className="navbar">
//         <div className="logo">
//           <h1>Exclusive</h1>
//         </div>
//         <div className="menu-items">
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//           <NavLink to="/signUp">Sign Up</NavLink>
//         </div>
       
//         <div className="flex">
//           <div className="search_section">
//             <input
//               type="text"
//               placeholder="What are you looking for?"
//               className="search_input"
//             />
//             <IoIosSearch />
//           </div>
//           <div className="icon_section">
//             <IoMdHeartEmpty />
//             <BsCart3 />
//           </div>
//           <div className="hamburger">
//             <button className="ham-berger-btn" onClick={toggleMenu}>
//               <GiHamburgerMenu />
//             </button>
//           </div>
//         </div>
//       </div>
//       {showMenu &&  <div className="hamburger-items">
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//           <NavLink to="/signUp">Sign Up</NavLink>
//         </div>}
//     </div>
//   );
// };


import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";


export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="main main_navbar">
      <div className="navbar">
        <div className="logo">
          <h1>Exclusive</h1>
        </div>

        {/* Desktop Menu */}
        <div className="menu-items">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <NavLink to="/signUp" className="nav-link">Sign Up</NavLink>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="search_section">
            <input type="text" placeholder="What are you looking for?" className="search_input" />
            <IoIosSearch />
          </div>
          <div className="icon_section">
            <IoMdHeartEmpty />
            <BsCart3 />
          </div>

          {/* Hamburger Menu */}
          <div className="hamburger">
            <button className="ham-berger-btn" onClick={toggleMenu}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Toggle) */}
      {showMenu && (
        <div className="hamburger-items">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <NavLink to="/signUp" className="nav-link">Sign Up</NavLink>
        </div>
      )}
    </div>
  );
};

