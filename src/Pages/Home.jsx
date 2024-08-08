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
  const [data, setData] = useState([]);

  return (
    <>
      <p>
        VoCheck is a tool for checking the accuracy of your voter information.
        People move, and in some cases do not vote for many years, so their
        voter information with the County can become inaccurate, or their voter
        status can be set to "Suspended". Use VoCheck to make sure your voter
        registration information is correct.
      </p>
      <Search firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} data={data} setData={setData}/>
      <SingleResult data={data} setData={setData}/>
    </>
  )

}

export default Home;