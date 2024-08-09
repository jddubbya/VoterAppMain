import { Link } from "react-router-dom";
import logo from "../../Content/vocheck.jpeg";

const Header = () => {
  return (
    <>
      <header>
        <div className="vocheckHeaderContainer">
          <h4> id="topHeader"> VoCheck Voter Lookup<h4>
        </div>
        <section className="logoSection">
          <Link to="/">
            <img class="logoImage"src={logo} width={60} height={60} />
          </Link>
          <Link to="/"><h1 className="titleH1">VoCheck</h1></Link>
        </section>
      </header>
    </>
  );
};

export default Header;
