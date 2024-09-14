/*
*  Search.jsx
*
*  Purpose: To take the first and last names entered on the page and
*           pass them to the server to query the database 
*  Exports: Search - the method used to make the database query.
*  HTML:    Builds the page with search options, "Stats" button and "Search" button
*/
import Results from "./Results";
import { useDispatch } from "react-redux";
import { setVoterData } from "../../Redux/slice.cjs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Search = ({ firstName, setFirstName, lastName, setLastName, address, setAddress, data, setData,selectedOption, setSelectedOption }) => {
  const navigate = useNavigate();
  
    const handleOptionChange = (event) => {
      const newValue = event.target.value;
      setSelectedOption(newValue);
      localStorage.setItem('selectedOption', newValue);
    };
    
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const voterTable = document.getElementById("countyDrop").value;

    if (address) {
      /*Clean up the address string - replace spaces with % wildcard*/
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
  }

  /* Make sure a state and county are selected before going to Maps page*/
  const mapsClickHandler = (e) => {
    e.preventDefault();
    if(!document.getElementById("countyDrop").value) {
      alert("You must select a state and county.")
    } else {
      navigate("/maps")
    }
  }
  
  /* Make sure a state and county are selected before going to Charts page*/
  const chartsClickHandler = (e) => {
    e.preventDefault();
    if(!document.getElementById("countyDrop").value) {
      alert("You must select a state and county.")
    } else {
      navigate("/charts")
    }
  }

  return (
    <>
      <form className="searchForm" onSubmit={submitHandler}>
        <section className="selectCont">
          <select value={selectedOption} onChange={handleOptionChange} id="countyDrop" required>
            <option value="">Select County:</option>
            <option value="texas_rockwall">TX - Rockwall</option>
            <option value="texas_collin">TX - Collin</option>
            <option value="colorado_larimer">CO - Larimer</option>
            <option value="colorado_douglas">CO - Douglas</option>
          </select>
        <Link to={"/charts"}><input type="button" value="Stats" onClick={chartsClickHandler} /></Link>
        <Link to={"/maps"}><input type="button" value="Maps" onClick={mapsClickHandler} /></Link>
        </section>
        <section className="inputCont">
        <h4>--- Search by Voter Name ---</h4>
          <input
            placeholder="First Name"
            onChange={(e) => { setFirstName(e.target.value) }}
            value={firstName}>
          </input>
          <p> </p>
          <input placeholder="Last Name"
            onChange={(e) => { setLastName(e.target.value) }}
            value={lastName}>
          </input>
          <h4>--- Or Address ---</h4>
          <input placeholder="1234 Main St"
            onChange={(e) => { setAddress(e.target.value) }}
            value={address}>
          </input>
          <p> </p>
          <input className="searchButton" type="submit" value="Search"></input>
        </section>
      </form>
      {data.length? 
      <Results data={data} setData={setData} />
      :
      null}

    </>
  )
}

export default Search;
