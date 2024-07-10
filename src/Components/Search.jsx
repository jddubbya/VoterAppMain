const Search = ({setFirstName, setLastName, firstName, lastName}) => {

  const submitHandler = (e) => {
    e.preventDefault();
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
  </>
  )
}

export default Search;
