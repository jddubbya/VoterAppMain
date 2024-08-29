import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {

  const token = useSelector(state => state.authorization.token);

  return (
    <>
      <footer>
        <div className="vocheck-footer container">
          <p>Copyright 2024 VoCheck. All rights reserved.</p>
          <h4>
            <Link to={`/tos`} className="footerLink">
              Terms of Service
            </Link>
          </h4>
          <h4>
            <Link to={'/privacy'} className="footerLink">
              Privacy Policy
            </Link>
          </h4>
          {token ?
            <h4>
              <Link to={'/userManager'} className="footerLink">
               Users
              </Link>
             </h4>
             :
            null
          }

        </div>
      </footer>
    </>
  );
};

export default Footer;
