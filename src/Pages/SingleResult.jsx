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