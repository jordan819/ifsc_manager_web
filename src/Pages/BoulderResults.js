import React from 'react';
import axios from 'axios';

export default class BoulderResults extends React.Component {
    state = {
        results: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/results/boulder`)
            .then(res => {
                const results = res.data;
                this.setState({results});
            })
    }

    render() {
        return (<div>
                BOULDER RESULTS
                <ul>
                    {this.state.results
                        .map(result => <li key={result.id}>
                            Id: {result.id} <br/>
                            Rok wydarzenia: {result.year + " "} <br/>
                            ID wydarzenia: {result.competitionId} <br/>
                            ID zawodnika: {result.climber} <br/>
                            Czas w kwalifikacjach: {result.qualification} <br/>
                            Czas w półfinale: {result.semiFinal} <br/>
                            Czas w finale: {result.final} <br/>
                        </li>)}
                </ul>
            </div>)
    }
}

