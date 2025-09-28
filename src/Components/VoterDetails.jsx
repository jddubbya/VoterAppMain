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

    const [fullAddress, setFullAddress] = useState('');

    useEffect(() => {
        if (selectedVoter) {
            console.log("selectedVoter: " + JSON.stringify(selectedVoter, null, 4));
            console.log(selectedVoter.FIRST_NAME);
            setFullAddress(selectedVoter.ADDRESS + ' ' + selectedVoter.CITY + ', ' + selectedVoter.STATE + ' ' + selectedVoter.ZIP);
            setFormData({
                "VOTERID": `${selectedVoter.VOTERID}`,
                "FULL_NAME": `${selectedVoter.FULL_NAME}`,
                "PARTY": `${selectedVoter.PARTY}`,
                "VOTER_STATUS": `${selectedVoter.VOTER_STATUS}`,
            });
            console.log("formData: " + JSON.stringify(formData, null, 4));
        };
    }, [selectedVoter]);

    const clearForm = () => {
        setFormData({
            "VOTERID": '',
            "FULL_NAME": '',
            "FIRST_NAME": '',
            "MIDDLE_NAME": '',
            "LAST_NAME": '',
            "REG_DATE": '',
        });
    };

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
                <section className="officialDetailsCont">
                    <form className="officialForm">
                        <section className="formInputCont">
                            <section className="holder">
                                <div className="officialTitleWithIcon">
                                    <h3>Voter Details:</h3>
                                </div>
                                <section className="contactCardName">
                                    <div className="labelFormat">
                                        <label>Name</label>
                                        <InputText
                                            disabled
                                            variant="standard"
                                            className="personInputXLong"
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
                                            disabled
                                            variant="standard"
                                            className="personInputMedium"
                                            placeholder="Generation"
                                            value={selectedVoter.GENERATION}
                                            name="GENERATION"
                                        />
                                    </div>
                                    <div className="labelFormat">
                                        <label>Address</label>
                                        <InputText
                                            disabled
                                            variant="standard"
                                            className="personInputXXLong"
                                            placeholder="Address"
                                            value={fullAddress}
                                            required
                                            name="FULL_ADDRESS"
                                        />
                                    </div>
                                    <div className="labelFormat">
                                        <label>Municipality</label>
                                        <InputText
                                            disabled
                                            variant="standard"
                                            className="personInputXLong"
                                            placeholder="Municipality"
                                            value={selectedVoter.MUNICIPALITY}
                                            required
                                            name="MUNICIPALITY"
                                        />
                                    </div>
                                    <div className="labelFormat">
                                        <label>Precinct</label>
                                        <InputText
                                            disabled
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
                                            disabled
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
                                            disabled
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
                                            disabled
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
                                            disabled
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
                                            disabled
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
                                            disabled
                                            variant="standard"
                                            className="personInputMedium"
                                            placeholder="Registration date"
                                            value={selectedVoter.REG_DATE}
                                            required
                                            name="REG_DATE"
                                        />
                                    </div>
                                </section>
                            </section>
                        </section>
                        <section>
                            <section className="centeredButtonCont">
                                <Button
                                    className="searchButton"
                                    icon={<MdCancel />}
                                    onClick={handleClose}>
                                    Close
                                </Button>
                            </section>
                        </section>
                    </form>
                </section>
            </section>
        </>
    )
};
export default VoterDetails;
