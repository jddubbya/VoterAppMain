import { Link } from "react-router-dom";

const Results = ({mockData}) => {

  return (
<>
<ul>
{mockData.map((mockName)=>{
  return (
    <li key={mockName.Id}><Link to={`/${mockName.Id}`}>{mockName.Name}</Link></li>
  )
})}
</ul>
</>
  )
}

export default Results