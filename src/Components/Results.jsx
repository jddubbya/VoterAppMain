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
// Icons
import { FaInfoCircle } from "react-icons/fa";

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

  // Handler for the Delete Official editor
  const handleVoterDetails = async (rowData) => {
    console.log("clicked details.....");
    console.log(rowData);
  }

  // ActionTemplate for the Details icon
  const detailsIcon = (rowData) => {
    return (<svg
      className="tableDetailsIcon"
      onClick={(e) => { handleVoterDetails(rowData) }}
    >
      <FaInfoCircle />
    </svg>
    );
  };

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
          selectionMode="single"
          dataKey="id"
          showGridlines
          stripedRows
          size="small"
          tableStyle={{ minWidth: '50rem' }}
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
            field="AGE"
            header="Age"
            sortable
            style={{ width: '5%' }}
          >
          </Column>
          <Column
            field="PARTY"
            header="Party"
            sortable
            style={{ width: '5%' }}
          >
          </Column>
          <Column
            field="VOTER_STATUS"
            header="Voter Status"
            sortable
            style={{ width: '7%' }}
          >
          </Column>
          <Column
            header="Details"
            body={detailsIcon.bind(this)}
            onClick={handleVoterDetails}
            style={{ textAlign: "center", width: '5%' }}
          />
        </DataTable>
      </section>
    </>
  );
};

export default Results;
