/*  Results.jsx
*
*  Purpose: Links the voter name to the voterID (unique key)
*           
*  Exports: Results - ??
*  HTML:    ??
*/
import { useSelector } from "react-redux";

const Results = () => {
  const currentSearch = useSelector((state) => state.voterData.voterData);
  const numMatches = currentSearch.length;
  let matchText = "Matches:"
  if (numMatches === 1) {
    matchText = "Match:"
  }
  return (
    <>
      <section className="searchMatchLabel">
        <p className="searchMatchText"> {numMatches} {matchText}</p>
      </section>
      <section className="resultsTableSection">
        {!currentSearch.length ? null : (
          <tbody className="resultsTableBody">
            <th className="resultsTableHeader">VOTER NAME</th>
            <th className="resultsTableHeader">PARTY</th>
            <th className="resultsTableHeader">AGE</th>
            <th className="resultsTableHeader">STATUS</th>
            <th className="resultsTableHeader">REG. DATE</th>
            {currentSearch.map((voter) => {
              return (
                <tr className="resultsTableRow"  key={voter.SOS_VOTERID}>
                  <td className="resultsTableLeft">  {voter.NAME}</td>
                  <td className="resultsTableRight">  {voter.PARTY}</td>
                  <td className="resultsTableCenter">  {voter.AGE}</td>
                  <td className="resultsTableRight">{voter.VOTER_STATUS}</td>
                  <td className="resultsTableCenter">{voter.REG_DATE}</td>
                </tr>
              );
            })}

          </tbody>
        )}
      </section>
    </>
  );
};

export default Results;
