/*
 *  SingleResult.jsx
 *
 *  Purpose: Displays the detailed voter information
 *  HTML:    Builds the page used to display the detailed voter information
 *           with a "Home" button that takes you back to the Home page.
 */
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";

const SingleResult = ({ data }) => {
  const voterList = useSelector((state) => state.voterData.voterData);
  const { id: voterId } = useParams();

  return (
    <>
      <section className="singleResultSection">
        {voterList.map((voter) => {
          if (voterId == voter.SOS_VOTERID) {
            return (
              <>
                <section className="singleDataSec">
                  <h3>{voter.NAME}</h3>
                  <h4><span className="tab"></span>Age: {voter.AGE}</h4>
                  <h4><span className="tab"></span>Party: {voter.PARTY}</h4>
                  <h4><span className="tab"></span>Address: {voter.ADDRESS}</h4>
                  <h4><span className="tab"></span>Municipality: {voter.MUNICIPALITY}</h4>
                  <h4><span className="tab"></span>Registration Date: {voter.REG_DATE}</h4>
                  <h4><span className="tab"></span>Voter Status: {voter.VOTER_STATUS}</h4>
                  <br></br>
                  <h3>Political Districts:</h3>
                  <h4><span className="tab"></span>Precinct: {voter.PRECINCT}</h4>  
                  <h4><span className="tab"></span>Congressional District: {voter.CONGR_DIST}</h4>
                  <h4><span className="tab"></span>State Senate District: {voter.STATE_SEN_DIST}</h4>
                  <h4><span className="tab"></span>State House District: {voter.STATE_HOUSE_DIST}</h4>
                  <h4><span className="tab"></span>County Commissioner District: {voter.CNTY_COMMISS_DIST}</h4>
                  <h4><span className="tab"></span>School District: {voter.SCHOOL_DIST}</h4>
                  <br></br>
                  <h3>Voting History:</h3>
                </section>
                <br></br>
                <Link to="/">
                  <input
                    className="backButton"
                    type="submit"
                    value="Back"
                  ></input>
                </Link>
              </>
            );
          }
        })}
      </section>
    </>
  );
};

export default SingleResult;