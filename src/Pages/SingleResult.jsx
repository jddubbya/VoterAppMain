/*
 *  SingleResult.jsx
 *
 *  Purpose: Displays the detailed voter information
 *  Exports: SingleResult - ??.
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
                  <h2>{voter.NAME}</h2>
                  <br></br>
                  <h3>Registration Date: {voter.REG_DATE}</h3>
                  <h3>Voter Status: {voter.VOTER_STATUS}</h3>
                  <h3>Address: {voter.ADDRESS}</h3>
                  <h3>Precinct: {voter.PRECINCT}</h3>
                  <h3>Age: {voter.AGE}</h3>
                  <h3>Party: {voter.PARTY}</h3>
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
