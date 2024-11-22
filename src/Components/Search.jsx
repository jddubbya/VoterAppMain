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
// MUI imports
import Button from '@mui/material/Button';
import { Input } from '@material-ui/core';
import Box from '@mui/material/Box';
import { Select } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
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
  const [stCntyList, setStCntyList] = useState([]);

  const handleOptionChange = (event) => {
    const newValue = event.target.value;
    console.log("newValue = " + newValue);
    setSelectedOption(newValue);
    localStorage.setItem('selectedOption', newValue);
  };

  // Handles the Submit button press
  const handleSubmit = async (e) => {
    e.preventDefault();
    const voterTable = selectedOption;

    if (address) {
      // Clean up the address string - replace spaces with % wildcard
      address = address.replace(/\s+/g, '%');
      const response = await fetch(`/db/getVoterByAddress/?address=${address}&voterTable=${voterTable}`);
      const result = await response.json();
      if (!result) {
        return;
      }
      setData(result);
      dispatch(setVoterData(result));
    } else {
      const response = await fetch(`/db/getVotersByName/?firstName=${firstName}&lastName=${lastName}&voterTable=${voterTable}`);
      const result = await response.json();
      if (!result) {
        return;
      }
      setData(result);
      dispatch(setVoterData(result));
    }
  };

  // Get the list of state - counties for the dropdown
  const getStatesCounties = async () => {
    const response = await fetch(`/db/getStCountyList`);
    const result = await response.json();
    setStCntyList(result);
  }

  // Runs the queries when the page loads - populate the dropdown
  useEffect(() => {
    const allQueries = async () => {
      await getStatesCounties();
    }
    allQueries();
  }, []);

  // Make sure a state and county are selected before going to Maps page
  const handleMapsClicked = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      alert("You must select a state and county.")
    } else {
      navigate("/maps")
    }
  }

  // Make sure a state and county are selected before going to Charts page
  const handleChartsClicked = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      alert("You must select a state and county.")
    } else {
      navigate("/charts")
    }
  };

  // Clears the form when the CLEAR button is pressed
  const handleClearForm = (e) => {
    setFirstName("");
    setLastName("");
    setAddress("");
  };

  ////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <section className="stateCountySelectCont">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel >COUNTY</InputLabel>
              <Select
                className="stCountySelect"
                id="countyDrop"
                value={selectedOption}
                label="COUNTY"
                input={<OutlinedInput label="COUNTY" />}
                onChange={handleOptionChange}
              >
                {stCntyList.map((stCounty) => (
                  <MenuItem
                    key={stCounty.ST_CNTY}
                    value={stCounty.ST_CNTY}
                  >
                    {stCounty.ST_CNTY}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Link to={"/charts"} className="linkButton">
            <Button
              className="topButton"
              variant="contained"
              startIcon={<GoGraph />}
              onClick={handleChartsClicked}>
              Stats
            </Button>
          </Link>
          <Link to={"/maps"} className="linkButton">
            <Button
              className="topButton"
              variant="contained"
              startIcon={<FaMapMarkedAlt />}
              onClick={handleMapsClicked}>
              Maps
            </Button>
          </Link>
        </section>
        <section className="searchInputCont">
          <h3>--- Search by Voter Name ---</h3>
          <Input
            placeholder="First Name"
            className="searchInput"
            onChange={(e) => { setFirstName(e.target.value) }}
            value={firstName}>
          </Input>
          <p> </p>
          <Input placeholder="Last Name"
            className="searchInput"
            onChange={(e) => { setLastName(e.target.value) }}
            value={lastName}>
          </Input>
          <h3>--- Or Address ---</h3>
          <Input placeholder="1234 Main St"
            className="searchInput"
            onChange={(e) => { setAddress(e.target.value) }}
            value={address}>
          </Input>
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
        </section>
      </form>
      {data.length ?
        <Results data={data} setData={setData} />
        :
        null}

    </>
  )
};

export default Search;