/* 
* Name: Header.jsx
* Type: component
* Arguments: none
* Description: The header that appears on all pages
*/

// Imports ///////////////////////////////////////////////////
// React imports
import { Link, useNavigate } from "react-router-dom";
// Vocheck Imports
import logo from "../../Content/vocheck.jpeg";
// Icons
import { LuLogOut } from "react-icons/lu";

const Header = () => {
  const navigate = useNavigate();

  // Logs the user out and clears Session Storage when the logout icon is clicked
  const handleLogoutClick = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    navigate('/login', { replace: true });
  };


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <header>
        <div className="topHeaderCont">
          <Link to="/">
            <img className="logoImage" src={logo} />
          </Link>
          <section>
            <h3 id="topHeader"> VoCheck</h3>
          </section>
          <section className="headerIconCont">
            <LuLogOut
              onClick={handleLogoutClick}
            />
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
