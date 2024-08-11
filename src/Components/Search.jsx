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
import { setVoterData } from "../../Redux/slice.cjs";

const Search = ({ firstName, setFirstName, lastName, setLastName, address, setAddress, data, setData }) => {
  const dispatch = useDispatch();

  /*Clean up the address string - remove double spaces*/
  address = address.replace(/\s+/g, ' ');

  const submitHandler = async (e) => {
    e.preventDefault();
    const voterTable = document.getElementById("countyDrop").value;

    if (address) {
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

  return (
    <>

      <form className="searchForm" onSubmit={submitHandler}>
        <section className="selectCont">
          <select id="countyDrop" required>
            <option value="">Select County:</option>
            <option value="colorado_larimer">Larimer County, CO</option>
            <option value="texas_rockwall">Rockwall County, TX</option>
            <option value="texas_collin">Collin County, TX</option>
          </select>
        </section>
        <section className="inputCont">
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
          <h4>--- OR Address ---</h4>
          <input placeholder="1234 Main St"
            onChange={(e) => { setAddress(e.target.value) }}
            value={address}>
          </input>
          <p> </p>
          <input className="searchButton" type="submit" value="Search"></input>
        </section>
      </form>
      <Results data={data} setData={setData} />
    </>
  )
}

export default Search;
