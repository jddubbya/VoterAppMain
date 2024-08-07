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
       <header>
         <div className="vocheck-header container">
          <p> VoCheck Voter Lookup</p>
         </div>
       </header>
       <h1>
        <img src="../../Content/vocheck.jpeg"
        width="60"
        height="60" />  VoCheck</h1>
       <h2>Voter Lookup</h2>
       <p>
        VoCheck is a tool for checking the accuracy of your voter information. 
        People move, and in some cases do not vote for many years, so their voter information with the County can become inaccurate, or their voter status can be set to "Suspended".
        Use VoCheck to make sure your voter registration information is correct.
       </p>
      <Search firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} data={data} setData={setData}/>
      <SingleResult data={data} setData={setData}/>
      <footer>
        <div className="vocheck-footer container">
        <p>
          Copyright 2024 VoCheck. All rights reserved.
        </p>
        <h4><a className="footerLink" href="https://www.vocheck.net">Terms of Service</a></h4>
        <h4><a className="footerLink" href="https://www.vocheck.net">Privacy Policy</a></h4>
        </div>
      </footer>
    </>
  )

}

export default Home;
