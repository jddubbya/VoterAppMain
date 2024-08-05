
/*
*  SingleResult.jsx
*
*  Purpose: Displays the detailed voter information 
*  Exports: SingleResult - ??.
*  HTML:    Builds the page used to display the detailed voter information
*           with a "Home" button that takes you back to the Home page.
*/
import { useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux";
import '../App.css'

const SingleResult = ({data}) => {
const voterList = useSelector(state => state.voterData.voterData)
const {id: voterId } = useParams();

  return(
    <>
    {voterList.map((voter)=>{
      if(voterId == voter.SOS_VOTERID){
        return (
          <>
          <h1>{voter.NAME}</h1><br></br>
          <section className="singleDataSec">
          <h3>Age: {voter.AGE}</h3>
          <h3>Address: {voter.ADDRESS}</h3>
          <h3>Voter Status: {voter.VOTER_STATUS}</h3>
          <h3>Registration Date: {voter.REG_DATE}</h3>
          <h3>Precinct: {voter.PRECINCT}</h3>
          <h3>Calculated Party: {voter.PARTY_CALC}</h3>
          <h3>New Voter: {voter.NEW_VOTER}</h3>
          <h3>Presidential Propensity: {voter.PRESIDENTIAL_PROPENSITY}</h3>
          <h3>Other Propensity: {voter.OTHER_PROPENSITY}</h3>
          </section>
          <br></br>
          <Link to="/"><button className="backButton">Home</button></Link>
          </>
        )
      }
    })}
    </>
  )
}

export default SingleResult