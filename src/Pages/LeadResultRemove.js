import React from 'react';
import axios from 'axios';

export default class LeadResultRemove extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: " ",
        }
    }

    handleChange = event => {
        this.setState({id: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`http://localhost:3000/results/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        ID wyniku:
                        <input type="text" name="id" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Usuń wynik</button>
                </form>
            </div>
        )
    }
}
