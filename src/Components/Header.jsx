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

if(sessionStorage.getItem('token')){
  token = sessionStorage.getItem('token')
};



  return (
    <>
      <header>
        <div className="vocheckHeaderContainer">
          <div className="emptyBox"></div>
          <section className="headTextCont">
            <h4 id="topHeader"> VoCheck Voter Lookup</h4>
          </section>
          <section className="loginButtonCont">
            {token ? 
            <>
            <select className="adminDrop">
              <option>Admin Options:</option>
              <option>Manage Users</option>
            </select>
            <button className="logInOutButton" onClick={logoutHandler}>Log Out</button>
            </>
            : 
            <Link to="/login" style={{ textDecoration: 'none' }}><input
            className="logInOutButton"
            type="submit"
            value="Login"
          ></input></Link>
            }
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
