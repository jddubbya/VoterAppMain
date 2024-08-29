import { Link } from "react-router-dom";
import logo from "../../Content/vocheck.jpeg";

const Header = () => {
  return (
    <>
      <header>
        <div className="vocheckHeaderContainer">
          <h4 id="topHeader"> VoCheck Voter Lookup</h4>
          <Link to="/login"><input
                    className="loginButton"
                    type="submit"
                    value="Login"
                  ></input></Link>
        </div>
        <section className="logoSection">
          <Link to="/">
            <img className="logoImage" src={logo} width={60} height={60} />
          </Link>
          <h1 className="titleH1">VoCheck</h1>
        </section>
      </header>
    </>
  );
};

export default Header
