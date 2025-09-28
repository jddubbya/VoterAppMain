/* 
* Name: Results.jsx
* Type: component
* Arguments: none
* Description: Displays the results of the voter lookup in a DataTable
*/

// Imports ///////////////////////////////////////////////////
// React
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
// Vocheck Components
import VoterDetails from "./VoterDetails";
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

  const bottomRef = useRef(null);

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
          ADDRESS: item.ADDRESS,
          CITY: item.CITY,
          STATE: item.STATE,
          ZIP: item.ZIP,
          PARTY: item.PARTY,
          AGE: item.AGE,
          GENERATION: item.GENERATION,
          VOTER_STATUS: item.VOTER_STATUS,
          MUNICIPALITY: item.MUNICIPALITY,
          PRECINCT: item.PRECINCT,
          CNTY_COMMISS_DIST: item.CNTY_COMMISS_DIST,
          SCHOOL_DIST: item.SCHOOL_DIST,
          REG_DATE: item.REG_DATE.substring(0, 10),
        }
      )
    })
  ];

  // This causes the page to scroll down when Search Results are displayed
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [numMatches]); // Will scroll to the bottom every time numMatches state changes

  // Handler for the Delete Official editor
  const handleVoterDetails = async (rowData) => {
    //  console.log("clicked details.....");
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

      {selectedVoter &&
        <VoterDetails
          selectedVoter={selectedVoter}
          setselectedVoter={setSelectedVoter}
          rowSelected={rowSelected}
          setRowSelected={setRowSelected}
        />
      }

      <section className="resultsTableCont">
        <DataTable
          onSelectionChange={(e) => handleRowSelect(e.value)}
          value={voters}
          selectionMode="single"
          dataKey="id"
          showGridlines
          stripedRows
          size="small"
          tableStyle={{ minWidth: '25rem' }}
          scrollable
        >
          <Column
            field="FULL_NAME"
            header="Name"
            sortable
          >
          </Column>
          <Column
            header="Details"
            body={detailsIcon.bind(this)}
            onClick={handleVoterDetails}
            style={{ textAlign: "center", width: '5%' }}
          />
        </DataTable>
        <div ref={bottomRef} />
      </section>
    </>
  );
};

export default Results;
