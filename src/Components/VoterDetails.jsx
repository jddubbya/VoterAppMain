/* 
* Name: VoterDetails.jsx
* Type: component
* Arguments: 
* Description: A popup form that is used to display voter detail information 
*/

// React
import { useState, useEffect } from "react";
//import secureLocalStorage from "react-secure-storage";
// Primereact
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
//import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
// Icons
//import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
//import { IoPerson } from "react-icons/io5";
// MUI
import Stack from '@mui/material/Stack';

// Code ///////////////////////////////////////////////////////////////////////////////

const VoterDetails = ({ selectedVoter, setSelectedVoter, rowSelected, setRowSelected }) => {

    const [formData, setFormData] = useState({
        "FULL_NAME": "",
        "FIRST_NAME": "",
        "MIDDLE_NAME": "",
        "LAST_NAME": "",
        "OFFICE_NAME": "",
        "OFFICE_LEVEL": "",
        "START_YEAR": "",
        "END_YEAR": ""
    });

    useEffect(() => {
        if (selectedVoter) {
            setFormData({
                "VOTERID": `${selectedVoter.VOTERID}`,
                "FULL_NAME": `${selectedVoter.FULL_NAME}`,
                "PARTY": `${selectedVoter.PARTY}`,
                "VOTER_STATUS": `${selectedVoter.VOTER_STATUS}`,
            });
        };
    }, [selectedVoter]);

    // Handles press of the Close button
    const handleClose = (e) => {
        if (rowSelected) {
            setRowSelected(false);
            setSelectedVoter(null);
        };
    };

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    return (
        <>
            <section className="voterDetailsContainer">
                <h3>Voter Details:</h3>
                <section>
                    <div className="labelFormat">
                        <label>Name</label>
                        <InputText
                            disabled
                            variant="standard"
                            className="personInputLong"
                            placeholder="Name"
                            value={selectedVoter['FULL_NAME']}
                            required
                            name="FULL_NAME"
                        />
                    </div>
                    <div className="labelFormat">
                        <label>Age</label>
                        <InputText
                            disabled
                            variant="standard"
                            className="personInputShort"
                            placeholder="Age"
                            value={selectedVoter.AGE}
                            name="AGE"
                        />
                    </div>
                    <div className="labelFormat">
                        <label>Generation</label>
                        <InputText
                            readOnly
                            variant="standard"
                            className="personInputMedium"
                            placeholder="Generation"
                            value={selectedVoter.GENERATION}
                            name="GENERATION"
                        />
                    </div>
                    <div className="labelFormat">
                        <label>Address</label>
                        <InputTextarea
                            readOnly
                            rows={2}
                            value={`${selectedVoter.ADDRESS}\n${selectedVoter.CITY + ', ' + selectedVoter.STATE + ' ' + selectedVoter.ZIP}`}
                            variant="standard"
                             className="my-textarea"
                            placeholder="Address"
                            required
                            name="stackedAddress"
                        />
                    </div>
                    <div className="labelFormat">
                        <label>Municipality</label>
                        <InputText
                            readOnly
                            variant="standard"
                            className="personInputLong"
                            placeholder="Municipality"
                            value={selectedVoter.MUNICIPALITY}
                            required
                            name="MUNICIPALITY"
                        />
                    </div>
                    <div className="labelFormat">
                        <label>Precinct</label>
                        <InputText
                            readOnly
                            variant="standard"
                            className="personInputMedium"
                            placeholder="Precinct"
                            value={selectedVoter.PRECINCT}
                            required
                            name="PRECINCT"
                        />
                    </div>
                    <div className="labelFormat">
                        <label>Commissioner Dist.</label>
                        <InputText
                            readOnly
                            variant="standard"
                            className="personInputShort"
                            placeholder="Commissioner District"
                            value={selectedVoter.CNTY_COMMISS_DIST}
                            required
                            name="CNTY_COMMISS_DIST"
                        />
                    </div>
                    <div className="labelFormat">
                        <label>School Dist.</label>
                        <InputText
                            readOnly
                            variant="standard"
                            className="personInputLong"
                            placeholder="School District"
                            value={selectedVoter.SCHOOL_DIST}
                            required
                            name="SCHOOL_DIST"
                        />
                    </div>
                    <div className="labelFormat">
                        <label>Voter ID</label>
                        <InputText
                            readOnly
                            variant="standard"
                            className="personInputMedium"
                            placeholder="Voter ID"
                            value={selectedVoter.VOTERID}
                            required
                            name="VOTERID"
                        />
                    </div>
                    <div className="labelFormat">
                        <label>Voter Status</label>
                        <InputText
                            readOnly
                            variant="standard"
                            className="personInputMedium"
                            placeholder="Last"
                            value={selectedVoter.VOTER_STATUS}
                            required
                            name="LAST_NAME"
                        />
                    </div>
                    <div className="labelFormat">
                        <label>Party</label>
                        <InputText
                            readOnly
                            variant="standard"
                            className="personInputMedium"
                            placeholder="Party"
                            value={selectedVoter.PARTY}
                            name="PARTY"
                        />
                    </div>
                    <div className="labelFormat">
                        <label>Reg. Date</label>
                        <InputText
                            readOnly
                            variant="standard"
                            className="personInputMedium"
                            placeholder="Registration date"
                            value={selectedVoter.REG_DATE}
                            required
                            name="REG_DATE"
                        />
                    </div>
                </section>
                <section className="centeredButtonCont">
                    <Button className="searchButton" onClick={handleClose}>
                        <MdCancel style={{ marginRight: '0.5rem' }} />
                        Close
                    </Button>
                </section>
            </section>
        </>
    )
};
export default VoterDetails;
