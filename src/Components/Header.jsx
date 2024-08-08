import { Link } from "react-router-dom";
import logo from '../../Content/vocheck.jpeg'

const Header = () => {
    return (
      <>
        <header>
          <div className="vocheckHeaderContainer">
            <p> VoCheck Voter Lookup</p>
          </div>
        </header>
        <section className="logoSection">
        <Link to="/">
            <img src={logo} width={60} height={60}/>
        </Link>
        <h1 className="titleH1">VoCheck</h1>
        </section>
        
      </>
    );
  };

export default Header
