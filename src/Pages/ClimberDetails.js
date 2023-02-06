import React, {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import ReactCountryFlag from "react-country-flag";

const ClimberDetails = () => {
    const {climberId} = useParams();
    const [climber, setClimber] = useState({})

    console.log("Fetching climber")
    axios.get(`http://localhost:3000/climbers/${climberId}`)
        .then(res => {
            setClimber(res.data);
            console.log(res.data.image)
        })
    console.log(climber.image)

    return (
        <div style={{textAlign: "center"}}>
            <div style={{display: "inline-block", backgroundColor:"#f3f4f4"}}>
                <img src={climber.image} alt="" style={{height: "300px"}}/>
                <ReactCountryFlag
                    style={{
                        width: '11em',
                        height: '5em',
                    }}
                    countryCode={climber.country} svg/>
            </div>
            <h1>{climber.name}</h1>
            <h6>ID zawodnika: {climberId}</h6>
            <h6>Data urodzenia: {climber.yearOfBirth}</h6>
            <h6>Kraj: {climber.country}</h6>
            <h6>Federacja: {climber.federation}</h6>
        </div>
    );
};

export default ClimberDetails
