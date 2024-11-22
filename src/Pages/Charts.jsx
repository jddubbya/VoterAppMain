/* 
* Name: Charts.jsx
* Type: Page
* Arguments: selectedOption
* Description: Builds the page used to display political charts for a county
*/

// Imports ///////////////////////////////////////////////////
// React imports
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// MUI imports
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
// Icons
import { HiHome } from "react-icons/hi";

const Charts = ({ selectedOption }) => {

    const stateCounty = selectedOption;
    const split = stateCounty.split("_");
    const usState = split[0].toUpperCase();
    const county = split[1].toUpperCase();

    /* Create state variables for each function*/
    const [voterStatusCnt, setVoterStatusCnt] = useState([]);
    const [voterPartyCnt, setVoterPartyCnt] = useState([]);
    const [voterGenderCnt, setVoterGenderCnt] = useState([]);
    const [precinctCnt, setPrecinctCnt] = useState([]);
    const [dataDate, setDataDate] = useState([]);

    // Get the Voter Status counts
    const getVoterStatusCnt = async () => {
        const response = await fetch(`/db/getVoterStatus/?stateCounty=${stateCounty}`);
        const result = await response.json();
        setVoterStatusCnt(result);
    };

    // Get the Gender counts
    const getVoterGenderCnt = async () => {
        const response = await fetch(`/db/getVoterGender/?stateCounty=${stateCounty}`);
        const result = await response.json();
        setVoterGenderCnt(result);
    };

    // Get the Party counts
    const getVoterPartyCnt = async () => {
        const response = await fetch(`/db/getVoterParty/?stateCounty=${stateCounty}`);
        const result = await response.json();
        setVoterPartyCnt(result);
    };

    // Get the Precincts count 
    const getPrecinctCnt = async () => {
        const response = await fetch(`/db/getPrecinct/?stateCounty=${stateCounty}`);
        const result = await response.json();
        setPrecinctCnt(result);
    };

    // Get the date for the data source
    const getDataDate = async () => {
        const response = await fetch(`/db/getDataDate/?stateCounty=${stateCounty}`);
        const result = await response.json();
        setDataDate(result);
    };

    // Runs the queries when the page loads
    useEffect(() => {
        const allQueries = async () => {
            await getVoterStatusCnt();
            await getVoterGenderCnt();
            await getVoterPartyCnt();
            await getDataDate();
            await getPrecinctCnt();
        }
        allQueries();
    }, []);

    // Get the total number of voters by adding the Active and Suspended Voters
    // parseInt is needed because the values are returned as strings
    const getTotalVoters = () => {
        return parseInt([voterStatusCnt[0].COUNT]) + parseInt([voterStatusCnt[1].COUNT]);
    };

    // Get the total number of voters by adding the Active and Suspended Voters
    // parseInt is needed because the values are returned as strings
    const getSuspendedPct = () => {
        const suspPct = (parseInt([voterStatusCnt[1].COUNT]) / getTotalVoters()) * 100;
        return suspPct.toFixed(1);
    };

    // Calculate the count() of the smaller Parties.
    // Add DEM, REP, UAF, LBR and subtract from total voters
    // and handle the case where no Party info is available
    const getOtherPartyCount = () => {
        const totalVoters = getTotalVoters();
        return totalVoters - (parseInt([voterPartyCnt[0].COUNT]) +
            parseInt([voterPartyCnt[1].COUNT]) +
            parseInt([voterPartyCnt[2].COUNT]) +
            parseInt([voterPartyCnt[3].COUNT]));
    };

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

    return (
        (!voterStatusCnt.length ||
            !voterPartyCnt.length ||
            !voterGenderCnt.length ||
            !precinctCnt.length) ? <p>Loading...</p> :
            <>
                <section className="statisticsSection">
                    <h2>Statistics for {county} County, {usState} </h2>
                    <p>Data as of: {[dataDate[0].DATA_DATE].toString().substring(0, 10)}</p>
                    <h3>Number of Precincts: {[precinctCnt[0].PCT_COUNT]}</h3>
                    <h3>Total Registered Voters: {getTotalVoters().toLocaleString('en-US')}</h3>
                    <h4>By Voter Status:</h4>

                    <Box sx={{ width: "80vw", fontSize: "16px" }}>
                        <PieChart
                            margin={{ right: 250 }}
                            series={[
                                {
                                    arcLabel: (item) => `(${item.value})`,
                                    arcLabelMinAngle: 0,
                                    data: [
                                        { id: 0, value: voterStatusCnt[0].COUNT, label: 'Active', color: 'lightgreen' },
                                        { id: 1, value: voterStatusCnt[1].COUNT, label: 'Suspended' + ' (' + getSuspendedPct() + '%)', color: 'coral' },
                                    ],
                                },
                            ]}
                            sx={{ "& .MuiChartsLegend-series text": { fontSize: "0.8em !important" }, }}
                            width={400}
                            height={150}
                        />
                    </Box>

                    <h4>By Gender:</h4>

                    <Box sx={{ width: "80vw", fontSize: "16px" }}>
                        <PieChart
                            margin={{ right: 250 }}
                            series={[
                                {
                                    arcLabel: (item) => `(${item.value})`,
                                    arcLabelMinAngle: 0,
                                    data: [
                                        { id: 0, value: voterGenderCnt[0].COUNT, label: 'Female', color: 'pink' },
                                        { id: 1, value: voterGenderCnt[1].COUNT, label: 'Male', color: 'lightblue' },
                                        { id: 2, value: voterGenderCnt[2].COUNT, label: 'Not Disclosed', color: 'purple' },
                                    ],
                                },
                            ]}
                            sx={{ "& .MuiChartsLegend-series text": { fontSize: "0.8em !important" }, }}
                            width={400}
                            height={150}
                        />
                    </Box>

                    <h4>By Party:</h4>
                    {voterPartyCnt.length > 1 ?

                        <Box sx={{ width: "80vw" }}>
                            <BarChart
                                width={400}
                                height={300}
                                barLabel="value"

                                series={[
                                    {
                                        data: [voterPartyCnt[3].COUNT, voterPartyCnt[0].COUNT,
                                        voterPartyCnt[2].COUNT, voterPartyCnt[1].COUNT,
                                        getOtherPartyCount()]
                                    },
                                ]}
                                xAxis={[{
                                    data: [voterPartyCnt[3].PARTY, voterPartyCnt[0].PARTY,
                                    voterPartyCnt[2].PARTY, voterPartyCnt[1].PARTY, 'OTHER'],
                                    scaleType: 'band'
                                }]}
                                sx={{
                                    "& .MuiChartsAxis-tickLabel tspan": { fontSize: "0.8em" },
                                    "& .MuiBarLabel-root": { fontSize: "0.8em", dominantBaseline: "auto" }
                                }}
                            />
                        </Box>

                        : <p>No party data available</p>
                    }
                </section>
                <div className="centeredButtonCont">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button
                            className="homeButton"
                            startIcon={<HiHome />}
                            variant="contained"
                            type="submit"
                        >
                            Home
                        </Button>
                    </Link>
                </div>
            </>
    )
};
export default Charts;