/*
*  Home.jsx
*
*  Purpose: Home page? 
*  Exports: Home - ??.
*  HTML:    Builds the page used to enter first and last name with a "Search" button
*/
import Search from "../Components/Search";
import { useState } from "react";
import SingleResult from "./SingleResult";
import { Link } from "react-router-dom";

const Home = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);

  return (
    <>
      <Search firstName={firstName} setFirstName={setFirstName}
              lastName={lastName} setLastName={setLastName}
              address={address} setAddress={setAddress}
              data={data} setData={setData}/>
      <SingleResult data={data} setData={setData}/>
    </>
  )

}

export default Home;
