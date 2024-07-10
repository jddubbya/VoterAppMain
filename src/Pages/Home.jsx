import Search from "../Components/Search";
import { useState } from "react";
import Results from "../Components/Results";

const Home = ({mockData}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <h1>Voter Lookup</h1>
      <Search setFirstName={setFirstName} setLastName={setLastName} firstName={firstName} lastName={lastName}/>
      <Results mockData={mockData}/>
    </>
  )
}

export default Home;
