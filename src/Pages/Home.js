import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Col, Container, Row} from 'react-bootstrap';
import "../css/home.css"
import climbersList from "../img/climbers_list.png"
import addClimber from "../img/climber_add.png"
import removeClimber from "../img/climber_remove.png"
import trophy from "../img/trophy.png"
import leaderboard from "../img/leaderboard.png"
import analysis from "../img/analysis.png"

function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={4} className="insure-block">
                        <Card>
                            <Card.Body>
                                <Card.Link href="./climbers" style={{height: '100'}}> <Card.Img src={climbersList}/>
                                    <Card.Title>Przeglądaj zawodników</Card.Title>
                                    <Card.Text>
                                        Zobacz listę wszystkich zawodników, ich statystyki i wiele więcej
                                    </Card.Text>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="insure-block">
                        <Card>
                            <Card.Body>
                                <Card.Link href="./climber-add" style={{height: '100'}}> <Card.Img src={addClimber}/>
                                    <Card.Title>Dodaj zawodnika</Card.Title>
                                    <Card.Text>
                                        Dodaj własnego zawodnika, by móc śledzić jego postępy
                                    </Card.Text>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="insure-block">
                        <Card>
                            <Card.Body>
                                <Card.Link href="./climbers" style={{height: '100'}}> <Card.Img
                                    src={removeClimber}/>
                                    <Card.Title>Usuń zawodnika</Card.Title>
                                    <Card.Text>
                                        W dowolnej chwili usuń zawodnika
                                    </Card.Text>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4} className="insure-block">
                        <Card>
                            <Card.Body>
                                <Card.Link href="./results" style={{height: '100'}}> <Card.Img src={trophy}/>
                                    <Card.Title>Przeglądaj wyniki</Card.Title>
                                    <Card.Text>
                                        Zobacz wyniki wydarzeń z ostatnich lat
                                    </Card.Text>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="insure-block">
                        <Card>
                            <Card.Body>
                                <Card.Link href="#" style={{height: '100'}}> <Card.Img src={leaderboard}/>
                                    <Card.Title>Porównaj zawodników</Card.Title>
                                    <Card.Text>
                                        Sprawdź, jak zawodnicy wypadają na tle innych
                                    </Card.Text>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="insure-block">
                        <Card>
                            <Card.Body>
                                <Card.Link href="#" style={{height: '100'}}> <Card.Img
                                    src={analysis}/>
                                    <Card.Title>Analizuj osiągnięcia</Card.Title>
                                    <Card.Text>
                                        Zapoznaj się z analizami osiągnięć sportowców, oraz ich rozwojem
                                    </Card.Text>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
