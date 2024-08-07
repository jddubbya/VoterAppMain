import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Results = () => {
  const currentSearch = useSelector((state) => state.voterData.voterData);
  return (
    <>
      {!currentSearch.length ? null : (
        <ul>
          {currentSearch.map((voter) => {
            return (
              <li className="resultItem" key={voter.SOS_VOTERID}>
                <Link to={`/${voter.SOS_VOTERID}`}>{voter.NAME}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Results;
