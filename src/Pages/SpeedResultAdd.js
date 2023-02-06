import React from 'react';
import axios from 'axios';
import "../css/leadResultAdd.css"

export default class SpeedResultAdd extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            year: " ",
            competitionId: " ",
            rank: " ",
            climber: " ",
            laneA: " ",
            laneB: " ",
            quarter: " ",
            semiFinal: " ",
            smallFinal: " ",
            final: " ",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3000/results/speed', this.state)
            .then(response => {
                console.log(response)
                window.location.href = "./";
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className='addClimber'>
                <form onSubmit={this.handleSubmit}>
                    <h1>Dodawanie wyniku SPEED</h1>
                    <input type="number" name="year" value={this.year} placeholder='Rok wydarzenia'
                           onChange={this.handleChange}/>
                    <input type="text" name="competitionId" value={this.competitionId} placeholder='Id wydarzenia'
                           onChange={this.handleChange}/>
                    <input type="number" name="rank" value={this.rank}
                           placeholder='Pozycja zawodnika' onChange={this.handleChange}/>
                    <input type="number" name="rank" value={this.climber}
                           placeholder='Id zawodnika' onChange={this.handleChange}/>
                    <input type="text" name="laneA" value={this.qualification}
                           placeholder='Wynik na torze A' onChange={this.handleChange}/>
                    <input type="text" name="laneB" value={this.qualification}
                           placeholder='Wynik na torze B' onChange={this.handleChange}/>
                    <input type="text" name="quarter" value={this.qualification}
                           placeholder='Wynik w ćwierćfinale' onChange={this.handleChange}/>
                    <input type="text" name="semiFinal" value={this.semiFinal}
                           placeholder='Wynik w półfinale' onChange={this.handleChange}/>
                    <input type="text" name="smallFinal" value={this.semiFinal}
                           placeholder='Wynik w małym finale' onChange={this.handleChange}/>
                    <input type="text" name="final" value={this.final}
                           placeholder='Wynik w finale' onChange={this.handleChange}/>
                    <button type="submit" onChange={this.handleSubmit} className="btn btn-primary">Dodaj wynik</button>
                </form>
            </div>
        )
    }
}
