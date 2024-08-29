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
import swal from 'sweetalert';
import LoginForm from "../Components/LoginForm";

const Home = ({ selectedOption, setSelectedOption }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);

  const disclaimer = "Maintaining accurate voter rolls is a challenging task. In order for rolls to be accurate, voters " +
    "should contact their county election officials when they move or if a family member passes away. VoCheck " +
    "is a free and easy way to check your voter information. VoCheck is not for commercial use, and is for use by U.S. citizens only. " + 
    "By clicking “I Agree”, you are affirming that before you use VoCheck, you have read  the Terms of Service below and agree to abide by them.";

  const agreeClicked = sessionStorage.getItem('agreed');
  
  if (!agreeClicked) {
    swal({
      title: "Before you start...",
      text: disclaimer,
      icon: "info",
      button: "I Agree",
    })
      .then(() => {
        sessionStorage.setItem('agreed', 'clicked');
      });
  }
  return (
    <>
      <Search firstName={firstName} setFirstName={setFirstName}
        lastName={lastName} setLastName={setLastName}
        address={address} setAddress={setAddress}
        data={data} setData={setData}
        selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <SingleResult data={data} setData={setData} />
    </>
  )

}

export default Home;
