import { useParams, Link } from "react-router-dom"

const SingleResult = ({mockData}) => {

  const {id: voterId } = useParams();

  return(
    <>
    {mockData.map((mockName)=>{
      if(voterId == mockName.Id){
        return (
          <>
          <h1>Name: {mockName.Name}</h1><br></br>
          <h3>Address: {mockName.Address}</h3><br></br>
          <h3>Voter Status: {mockName.VoterStatus}</h3><br></br>
          <h3>Registration Date: {mockName.RegistrationDate}</h3><br></br>
          <button><Link to="/">Back</Link></button>
          </>
        )
      }
    })}
    </>
  )
}

export default SingleResult