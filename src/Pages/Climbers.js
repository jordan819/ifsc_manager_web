import React from 'react';
import axios from 'axios';

export default class Climbers extends React.Component {
    state = {
        climbers: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/climbers/`)
            .then(res => {
                const climbers = res.data;
                this.setState({climbers});
            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.climbers
                        .map(climber =>
                            <li key={climber.id}>
                                Id: {climber.id} <br/>
                                Imię i nazwisko: {climber.name + " "} <br/>
                                Rok urodzenia: {climber.yearOfBirth} <br/>
                                Kraj pochodzenia: {climber.country} <br/>
                                Federacja: {climber.federation} <br/>
                            </li>
                        )
                }
            </ul>
        )
    }
}

