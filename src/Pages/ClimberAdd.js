import React from 'react';
import axios from 'axios';
import "../css/climberAdd.css"

export default class ClimberAdd extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            name: " ",
            yearOfBirth: " ",
            country: " ",
            federation: " ",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3000/climbers/', this.state)
            .then(response => {
                console.log(response)
                window.location.href = "./climbers";
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className='addClimber'>
                <form onSubmit={this.handleSubmit}>
                    <h1>Dodawanie zawodnika</h1>
                    <input type="number" name="id" placeholder='ID zawodnika' value={this.name}
                           onChange={this.handleChange}/>
                    <input type="text" name="name" placeholder='Imię i nazwisko' value={this.name}
                           onChange={this.handleChange}/>
                    <input type="number" name="yearOfBirth" value={this.yearOfBirth} placeholder='Rok urodzenia'
                           onChange={this.handleChange}/>
                    <input type="text" name="country" value={this.country} placeholder='Kraj pochodzenia'
                           onChange={this.handleChange}/>
                    <input type="text" name="federation" value={this.federation}
                           placeholder='Federacja' onChange={this.handleChange}/>
                    <button type="submit" onChange={this.handleSubmit} className="btn btn-primary">Dodaj zawodnika</button>
                </form>
            </div>
        )
    }
}
