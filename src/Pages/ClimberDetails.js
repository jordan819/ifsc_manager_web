import React from "react";
import {useParams} from "react-router-dom";

const ClimberDetails = () => {
    const {climberId} = useParams();

    return (
        <div>
            <h1>Climber ID: {climberId}</h1>
        </div>
    );
};

export default ClimberDetails
