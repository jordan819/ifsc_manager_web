import React from 'react';
import axios from 'axios';
import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import "../css/home.css"

export default class Climbers extends React.Component {
    state = {
        climbers: []
    }

    componentDidMount() {
        this.refreshList()
    }

    handleDelete = (id) => {
        console.log("Deleting user with id: " + id)
        axios.delete(`http://localhost:3000/climbers/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.refreshList();
            })
    }

    refreshList = () => {
        console.log("Fetching climbers")
        axios.get(`http://localhost:3000/climbers/`)
            .then(res => {
                const climbers = res.data;
                this.setState({climbers});
            })
    }

    render() {
        return (
            <Row>
                {this.state.climbers.map(climber => (
                    <Col xs={3} className="insure-block">
                        <Card>
                            <Card.Header style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <div style={{flexGrow: 1, textAlign: "center"}}>
                                    {climber.name}
                                </div>
                                <Link to="#">
                                    <FontAwesomeIcon className="trash-icon" icon={faTrash}
                                                     onClick={() => this.handleDelete(climber._id)}/>
                                </Link>
                            </Card.Header>
                            <Card.Body>
                                <Link to={`/climbers/${climber._id}/details`}>
                                    <Card.Img src={climber.image}/>
                                    <Card.Title/>
                                    <Card.Text>
                                        Rok urodzenia: {climber.yearOfBirth}
                                        <br/>
                                        Kraj pochodzenia: {climber.country}
                                        <br/>
                                        Federacja: {climber.federation}
                                    </Card.Text>
                                </Link>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        );
    }
}

