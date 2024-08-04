import Results from "./Results";
import { useDispatch } from "react-redux";
import {setVoterData} from "../../Redux/slice.cjs";


const Search = ({firstName, setFirstName, lastName, setLastName, data, setData}) => {
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`/db/get/?firstName=${firstName}&lastName=${lastName}`);
    const result = await response.json();
    setData(result);
    dispatch(setVoterData(result));
  }

  return (
  <>
  <form onSubmit={submitHandler}>
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
    <input type="submit" value="Search"></input>
  </form>
  <Results data={data} setData={setData}/>
  </>
  )
}

export default Search;
