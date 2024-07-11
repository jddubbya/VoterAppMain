import Search from "../Components/Search";
import { useState } from "react";
import SingleResult from "./SingleResult";

const Home = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [data, setData] = useState([]);

  return (
    <>
      <h1>Voter Lookup</h1>
      <Search firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} data={data} setData={setData}/>
      <SingleResult data={data} setData={setData}/>
    </>
  )
}

export default Home;
