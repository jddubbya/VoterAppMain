/* 
* Name: Home.jsx
* Type: page
* Arguments: selectedOption
* Description: The page that serves up the search components
*/

// Imports ///////////////////////////////////////////////////
// React
import { useState } from "react";
// Vocheck
import Search from "../Components/Search";

const Home = ({ selectedOption, setSelectedOption }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);

  ////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <section className="pageCont">
        <Search firstName={firstName} setFirstName={setFirstName}
          lastName={lastName} setLastName={setLastName}
          address={address} setAddress={setAddress}
          data={data} setData={setData}
          selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      </section>
    </>
  )
};

export default Home;
