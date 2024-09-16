import { Link } from "react-router-dom";
import logo from "../../Content/vocheck.jpeg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../Redux/authSlice.cjs";
import CountdownTimer from "../Components/CountdownTimer";

const Header = () => {
  const navigate = useNavigate();
  let token = useSelector(state => state.authorization.token);
  const dispatch = useDispatch();

  const reload = () => {
    window.location.reload();
  }

  const logoutHandler = () => {
    dispatch(setToken(''));
    sessionStorage.removeItem("token");
    navigate('/');
    reload();
  };

  if (sessionStorage.getItem('token')) {
    token = sessionStorage.getItem('token')
  };

  return (
    <>
      <header>
        <div className="topHeaderContainer">
          <section>
            <h2 id="topHeader"> VoCheck Voter Lookup</h2>
          </section>
        </div>
        <section className="logoSection">
          <Link to="/">
            <img className="logoImage" src={logo} />
          </Link>
          <div className="emptyBox"></div>
          <div className="timerContainer">
            <CountdownTimer headerText = "NOV 7 ELECTION IN:"/>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
