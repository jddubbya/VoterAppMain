/* 
* Name: Results.jsx
* Type: component
* Arguments: none
* Description: Displays the results of the voter lookup in a DataTable
*/

// Imports ///////////////////////////////////////////////////
// React
import { useSelector } from "react-redux";
// Primereact DataTable
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

const Results = () => {
  const currentSearch = useSelector((state) => state.voterData.voterData);
  const numMatches = currentSearch.length;
 // console.log("currentSearch = " + JSON.stringify(currentSearch, null, 4));
  let matchText = "Matches:"
  if (numMatches === 1) {
    matchText = "Match:"
  }

  // Populate the VOTER DataTable
  const voters = [
    ...currentSearch.map((item) => {
      return (
        {
          id: item.SOS_VOTERID,
          NAME: item.NAME,
          PARTY: item.PARTY,
          AGE: item.AGE,
          VOTER_STATUS: item.VOTER_STATUS,
          REG_DATE: item.REG_DATE,
        }
      )
    })
  ];

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////  

  return (
    <>
      <section className="resultsTextCont">
        <h4 className="searchMatchText"> {numMatches} {matchText}</h4>
      </section>

      <section className="resultsTableCont">
        <DataTable
          value={voters}
          dataKey="id"
          showGridlines
          stripedRows
          scrollable
        >
          <Column
            field="NAME"
            header="Name"
            sortable
            style={{ width: '40%'}}
          >
          </Column>
          <Column
            field="PARTY"
            header="Party"
            sortable
            style={{ width: '15%' }}
          >
          </Column>
          <Column
            field="AGE"
            header="Age"
            sortable
            style={{ width: '15%' }}
          >
          </Column>
          <Column
            field="VOTER_STATUS"
            header="Status"
            sortable
            style={{ width: '15%' }}
          >
          </Column>
          <Column
            field="REG_DATE"
            header="Reg Date"
            sortable
            style={{ width: '15%' }}
          >
          </Column>
        </DataTable>
      </section>
    </>
  );
};

export default Results;