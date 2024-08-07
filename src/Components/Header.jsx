import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="vocheck-header container">
          <p> VoCheck Voter Lookup</p>
        </div>
      </header>
      <h1>
        <Link to="/">
          <img src="../../Content/vocheck.jpeg" width="60" height="60">
        </Link> VoCheck
      </h1>
      <h2>Voter Lookup</h2>
      <p>
        VoCheck is a tool for checking the accuracy of your voter information.
        People move, and in some cases do not vote for many years, so their
        voter information with the County can become inaccurate, or their voter
        status can be set to "Suspended". Use VoCheck to make sure your voter
        registration information is correct.
      </p>
    </>
  );
};

export default Header;
