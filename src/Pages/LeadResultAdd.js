import React from 'react';
import axios from 'axios';
import "../css/leadResultAdd.css"

export default class LeadResultAdd extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            year: " ",
            competitionId: " ",
            rank: " ",
            climber: " ",
            qualification: " ",
            semiFinal: " ",
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
        axios.post('http://localhost:3000/results/', this.state)
            .then(response => {
                console.log(response)
                window.location.href = "./results";
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className='addClimber'>
                <form onSubmit={this.handleSubmit}>
                    <h1>Dodawanie wyniku LEAD</h1>
                    <input type="number" name="id" placeholder='Id wyniku' value={this.id}
                           onChange={this.handleChange}/>
                    <input type="number" name="year" value={this.year} placeholder='Rok wydarzenia'
                           onChange={this.handleChange}/>
                    <input type="text" name="competitionId" value={this.competitionId} placeholder='Id wydarzenia'
                           onChange={this.handleChange}/>
                    <input type="number" name="rank" value={this.rank}
                           placeholder='Pozycja zawodnika' onChange={this.handleChange}/>
                    <input type="number" name="rank" value={this.climber}
                           placeholder='Id zawodnika' onChange={this.handleChange}/>
                    <input type="text" name="qualification" value={this.qualification}
                           placeholder='Wynik w kwalifikacjach' onChange={this.handleChange}/>
                    <input type="text" name="semiFinal" value={this.semiFinal}
                           placeholder='Wynik w półfinale' onChange={this.handleChange}/>
                    <input type="text" name="final" value={this.final}
                           placeholder='Wynik w finale' onChange={this.handleChange}/>
                    <button type="submit" onChange={this.handleSubmit} className="btn btn-primary">Dodaj wynik</button>
                </form>
            </div>
        )
    }
}
