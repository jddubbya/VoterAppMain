/* 
* Name: Search.jsx
* Type: firstName, lastName, address, data, selectedOption
* Arguments: none
* Description: The page used to search the voter database
*/

// Imports ///////////////////////////////////////////////////
// React imports
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from 'react-secure-storage';
// MUI imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// icons
import { MdPersonSearch } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
// Vocheck imports
import { setVoterData } from "../../Redux/slice.cjs";
import Results from "./Results";


const Search = ({ firstName, setFirstName, lastName, setLastName, address, setAddress, data, setData, selectedOption, setSelectedOption }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');

  const LoggedUser = secureLocalStorage.getItem("LoggedUser");
  const usState = secureLocalStorage.getItem("usState");
  const usCounty = secureLocalStorage.getItem("usCounty");
  const voterTable = usState + "_" + usCounty;

  // Handles the Submit button press
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (address) {
      const response = await fetch(`/db/getVoterByAddress/?address=${address}&voterTable=${voterTable}`);
      const result = await response.json();
      if (!result) {
        return;
      }
      setData(result);
      dispatch(setVoterData(result));
    } else {
      // Get first and last names from the full name
      const split = fullName.split(" ");
      const first = (split[0]);
      const last = (split[1]);

      const response = await fetch(`/db/getVotersByName/?firstName=${first}&lastName=${last}&voterTable=${voterTable}`);
      const result = await response.json();
      if (!result) {
        return;
      }
      setData(result);
      dispatch(setVoterData(result));
    }
  };

  // Runs the queries when the page loads - populate the dropdown
  useEffect(() => {
  }, []);

  // Make sure a state and county are selected before going to Maps page
  const handleMapsClicked = (e) => {
    e.preventDefault();
      navigate("/maps");
  }

  // Make sure a state and county are selected before going to Charts page
  const handleChartsClicked = (e) => {
    e.preventDefault();
      navigate("/charts");
  };

  // Clears the form when the CLEAR button is pressed
  const handleClearForm = (e) => {
    setFirstName("");
    setLastName("");
    setFullName("");
    setAddress("");
  };

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <h2>{usCounty}, {usState}</h2>
        <section className="stateCountySelectCont">
          <Link to={"/charts"} onClick={handleChartsClicked}>
            <GoGraph className="mapChartIcon" />
          </Link>
          <Link to={"/maps"} onClick={handleMapsClicked}>
            <FaMapMarkedAlt className="mapChartIcon" />
          </Link>
        </section>
        <section className="searchInputCont">

          <h3>--- Search by Voter Name ---</h3>
          <TextField
            variant="standard"
            placeholder="John Smith"
            className="searchInput"
            onChange={(e) => { setFullName(e.target.value) }}
            value={fullName}>
          </TextField>
          <h3>--- Search by Address ---</h3>
          <TextField placeholder="1234 Main St"
            variant="standard"
            className="searchInput"
            onChange={(e) => { setAddress(e.target.value) }}
            value={address}>
          </TextField>
          <p> </p>
          <section className="searchButtonsCont">
            <Button
              className="searchButton"
              startIcon={<MdPersonSearch />}
              variant="contained"
              type="submit"
            >
              Search
            </Button>
            <Button
              className="searchButton"
              startIcon={<FaUndoAlt />}
              variant="contained"
              type="cancel"
              onClick={handleClearForm}
            >
              CLEAR
            </Button>

          </section>
          {data.length ?
            <Results data={data} setData={setData} />
            :
            null}
        </section>
      </form>
    </>
  )
};

export default Search;
