/* 
* Name: Footer.jsx
* Type: component
* Arguments: none
* Description: The footer that appears on all pages
*/

// Imports ///////////////////////////////////////////////////
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerCont">
          <p>© 2024 electionsTECH LLC. All rights reserved.</p>
          <section className="footerLinksCont">
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
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;