/*
*  Search.jsx
*
*  Purpose: To take the first and last names entered on the page and
*           pass them to the server to query the database 
*  Exports: Search - the method used to make the database query.
*  HTML:    Builds the page used to enter first and last name with a "Search" button
*/
import Results from "./Results";
import { useDispatch } from "react-redux";
import {setVoterData} from "../../Redux/slice.cjs";

const Search = ({firstName, setFirstName, lastName, setLastName, data, setData}) => {
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const voterTable = document.getElementById("countyDrop").value;
    const response = await fetch(`/db/getVotersByName/?firstName=${firstName}&lastName=${lastName}&voterTable=${voterTable}`);
    const result = await response.json();
    if(!result) {
      return;
    }
    setData(result);
    dispatch(setVoterData(result));
    console.log(voterTable);
  }
  // const tableSubmit = (e) => {
  //   e.preventDefault();
  //   const voterTable = document.getElementById("countyDrop").value;
  // }
  
  return (
  <>

  <form className="searchForm" onSubmit={submitHandler}>
  <section className="selectCont">
  <select id="countyDrop">
    <option value="">Select County:</option>
    <option value="colorado_larimer">Larimer County, CO</option>
    <option value="texas_rockwall">Rockwall County, TX</option>
  </select>
  </section>
  <section className="inputCont">
    <input 
    placeholder="First Name:"
    onChange={(e) => {setFirstName(e.target.value)}}
    value={firstName}>
    </input>
    <p> </p>
    <input placeholder="Last Name:"
    onChange={(e) => {setLastName(e.target.value)}}
    value={lastName}>
    </input>
    <p> </p>
    <input className="searchButton" type="submit" value="Search"></input>
    </section>
  </form>
  <Results data={data} setData={setData}/>
  </>
  )
}

export default Search;
