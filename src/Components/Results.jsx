/* 
* Name: Results.jsx
* Type: component
* Arguments: none
* Description: Displays the results of the voter lookup in a DataTable
*/

// Imports ///////////////////////////////////////////////////
// React
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
// Primereact DataTable
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

const Results = () => {

  const [rowSelected, setRowSelected] = useState(false);
  const [selectedVoter, setSelectedVoter] = useState(null);

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
          id: item.VOTERID,
          VOTERID: item.VOTERID,
          FULL_NAME: item.FULL_NAME,
          PARTY: item.PARTY,
          AGE: item.AGE,
          VOTER_STATUS: item.VOTER_STATUS,
          REG_DATE: item.REG_DATE.substring(0, 10),
        }
      )
    })
  ];

  // Executes when a row is selected
  const handleRowSelect = async (rowData) => {
    setRowSelected(true);
    setSelectedVoter(rowData);
  };

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////  

  return (
    <>
      <section className="resultsTextCont">
        <h4 className="searchMatchText"> {numMatches} {matchText}</h4>
      </section>

      <section className="resultsTableCont">
        <DataTable
          onSelectionChange={(e) => handleRowSelect(e.value)}
          value={voters}
          dataKey="id"
          showGridlines
          stripedRows
          selectionMode="single"
          scrollable
        >
          <Column
            field="FULL_NAME"
            header="Name"
            sortable
            style={{ width: '25%' }}
          >
          </Column>
          <Column
            field="VOTERID"
            header="VoterID"
            sortable
            style={{ width: '10%' }}
          >
          </Column>
          <Column
            field="PARTY"
            header="Party"
            sortable
            style={{ width: '10%' }}
          >
          </Column>
          <Column
            field="AGE"
            header="Age"
            sortable
            style={{ width: '10%' }}
          >
          </Column>
          <Column
            field="VOTER_STATUS"
            header="Status"
            sortable
            style={{ width: '10%' }}
          >
          </Column>
          <Column
            field="REG_DATE"
            header="Reg Date"
            sortable
            style={{ width: '10%' }}
          >
          </Column>
        </DataTable>
      </section>
    </>
  );
};

export default Results;
