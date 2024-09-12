import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="vocheck-footer container">
          <p>Copyright 2024 electionsTECH LLC. All rights reserved.</p>
          <h4>
            <Link to={`/tos`} className="footerLink">
              Terms of Service
            </Link>
          </h4>
          <h4>
            <Link to={'/privacy'}className="footerLink">
              Privacy Policy
            </Link>
          </h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
