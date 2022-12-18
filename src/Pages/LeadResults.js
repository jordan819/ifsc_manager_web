import React from 'react';
import axios from 'axios';

export default class LeadResults extends React.Component {
    state = {
        results: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/results/`)
            .then(res => {
                const results = res.data;
                this.setState({results});
            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.results
                        .map(result =>
                            <li key={result.id}>
                                Id: {result.id} <br/>
                                Rok wydarzenia: {result.year + " "} <br/>
                                ID wydarzenia: {result.competitionId} <br/>
                                ID zawodnika: {result.climber} <br/>
                                Czas w kwalifikacjach: {result.qualification} <br/>
                                Czas w półfinale: {result.semiFinal} <br/>
                                Czas w finale: {result.final} <br/>
                            </li>
                        )
                }
            </ul>
        )
    }
}

