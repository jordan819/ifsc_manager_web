import React from 'react';
import axios from 'axios';
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

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
        return (this.state.climbers
            .map(climber => <Col className="insure-block">
                <Card>
                    <Card.Header>
                        {climber.name}
                    </Card.Header>
                    <Card.Body>
                        <Link to={`/climbers/${climber.id}/details`}> <Card.Img
                            src={climber.image}/>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                Id: {climber.id}<br/>
                                Rok urodzenia: {climber.yearOfBirth}<br/>
                                Kraj pochodzenia: {climber.country}<br/>
                                Federacja: {climber.federation}
                            </Card.Text>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>))
    }
}

