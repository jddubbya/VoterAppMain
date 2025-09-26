/* 
* Name: Home.jsx
* Type: page
* Arguments: selectedOption
* Description: The page that serves up the search components
*/

// Imports ///////////////////////////////////////////////////
// React
import { useState } from "react";
// Sweetalert
import Swal from 'sweetalert2';
// Vocheck
import Search from "../Components/Search";

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

  // The popup with the disclaimer
  if (!agreeClicked) {
    Swal.fire({
      title: "Before you start...",
      text: disclaimer,
      confirmButtonText: "I Agree",
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: 'swal-size'
    })
      .then(() => {
        sessionStorage.setItem('agreed', 'clicked');
      });
  };

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