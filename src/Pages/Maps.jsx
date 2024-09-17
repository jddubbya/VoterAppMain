/*
*  Maps.jsx
*
*  Purpose: Maps page
*  Exports: none.
*  HTML:    Builds the page used to display political maps for a county
*/
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Maps = ({ selectedOption }) => {

    const stateCounty = selectedOption;
    const split = stateCounty.split("_");
    let usState = split[0];
    usState = usState.toUpperCase();
    let county = split[1];
    county = county.toUpperCase();
    let mapURL = '';

    switch (county) {
        case "ROCKWALL":
            mapURL = "https://www.google.com/maps/d/embed?mid=19vf57BJvT256gDFOPxm4udW3XtDdHvo&ehbc=2E312F&noprof=1&zoom=9&ll=32.90466391304642%2C-96.40261324716798&z=11";
            break;
        case "LARIMER":
            mapURL = "https://www.google.com/maps/d/embed?mid=1wER0QBICIAjYHJ94rArRMJ_ptTzhOfU&ehbc=2E312F&noprof=1&zoom=9&ll=40.64524800318158%2C-105.5532511533203&z=9";
            break;
        case "COLLIN":
            mapURL = "https://www.google.com/maps/d/embed?mid=1c6RQuw-VtphI0vLa1hzNYLn90ehB4mE&ehbc=2E312FF&noprof=1&zoom=9&ll=33.202878837648285%2C-96.63653854260464&z=10";
            break;
        default:
            mapURL = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14615635.028178228!2d-101.4869735317338!3d39.77896683227025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1726531438762!5m2!1sen!2sus"
    }

    /* Builds the Maps page*/
    return (
        <>
            <section className="mapsSection">
                <iframe src={mapURL} width="640" height="480">
                </iframe>
            </section>
            <div className="centeredButtonCont">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <input
                    className="backButton"
                    type="submit"
                    value="Home"
                ></input>
            </Link>
            </div>
        </>
    )
}
export default Maps;
