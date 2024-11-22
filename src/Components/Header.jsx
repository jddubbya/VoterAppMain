/* 
* Name: Header.jsx
* Type: component
* Arguments: none
* Description: The header that appears on all pages
*/

// Imports ///////////////////////////////////////////////////
// React imports
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Vocheck Imports
import logo from "../../Content/vocheck.jpeg";
import CountdownTimer from "../Components/CountdownTimer";

const Header = () => {

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <header>
        <div className="topHeaderCont">
          <section>
            <h2 id="topHeader"> VoCheck Voter Lookup</h2>
          </section>
        </div>
        <section className="bottomHeaderCont">
          <Link to="/">
            <img className="logoImage" src={logo} />
          </Link>
          <div className="emptyBox"></div>
          <div className="timerTableDiv">
            <CountdownTimer headerText = "Trump Inauguration In:"/>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
