import React from 'react';
import axios from 'axios';
import {Card, Col} from "react-bootstrap";

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
            this.state.climbers
                .map(climber =>
                    <Col className="insure-block">
                        <Card>
                            <Card.Body>
                                <Card.Link href="#" style={{height: '100'}}> <Card.Img
                                    src={climber.image}/>
                                    <Card.Title>{climber.name} ({climber.id})</Card.Title>
                                    <Card.Text>
                                        Rok urodzenia: {climber.yearOfBirth}<br/>
                                        Kraj pochodzenia: {climber.country}<br/>
                                        Federacja: {climber.federation}
                                    </Card.Text>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )
        )
    }
}

