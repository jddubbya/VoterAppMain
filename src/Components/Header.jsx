import { Link } from "react-router-dom";
import logo from '../../Content/vocheck.jpeg'

const Header = () => {
    return (
      <>
        <header>
          <div className="vocheck-header container">
            <p> VoCheck Voter Lookup</p>
          </div>
        </header>
        <Link to="/">
            <h1><img src={logo} width={60} height={60}/> VoCheck</h1>
        </Link>
        
      </>
    );
  };
export default Header
