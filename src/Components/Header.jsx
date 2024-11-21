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
