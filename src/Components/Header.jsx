import { Link } from "react-router-dom";
import logo from "../../Content/vocheck.jpeg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../Redux/authSlice.cjs";

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
            <h4 id="topHeader"> VoCheck Voter Lookup</h4>
          </section>
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

export default Header;
