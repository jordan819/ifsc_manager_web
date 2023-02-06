import React from 'react';
import axios from 'axios';

export default class LeadResults extends React.Component {
    state = {
        results: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/results/lead`)
            .then(res => {
                const results = res.data;
                this.setState({results});
            })
    }

    render() {
        return (
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead style={{ backgroundColor: '#f2f2f2' }}>
                <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Rok wydarzenia</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>ID wydarzenia</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>ID zawodnika</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Czas w kwalifikacjach</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Czas w półfinale</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Czas w finale</th>
                </tr>
                </thead>
                <tbody>
                {this.state.results.map(result => (
                    <tr key={result._id}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{result.year}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{result.competitionId}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{result.climber}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{result.qualification}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{result.semiFinal}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{result.final}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

