import React, {Component} from 'react'
import {Col, Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import ErrorPage from '../Pages/ErrorPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import Climbers from '../Pages/Climbers'
import ClimberAdd from '../Pages/ClimberAdd'
import ClimberRemove from '../Pages/ClimberRemove'
import logo from '../img/logo.png'
import "../css/navbar.css"
import LeadResultAdd from "../Pages/LeadResultAdd";
import LeadResults from "../Pages/LeadResults";
import SpeedResults from "../Pages/SpeedResults";
import SpeedResultAdd from "../Pages/SpeedResultAdd";
import BoulderResults from "../Pages/BoulderResults";
import BoulderResultAdd from "../Pages/BoulderResultAdd";

export default class NavbarComp extends Component {
    render() {
        return (<Router>
            <Navbar bg="light" expand="lg">
                <Container fluid className="menu">
                    <Row>
                        <Col lg={12} className="logo menu_2">
                            <Navbar.Brand href="/">
                                <img
                                    alt="logo"
                                    src={logo}
                                    width="70"
                                    height="70"
                                    className="d-inline-block align-top"
                                />
                            </Navbar.Brand>
                        </Col>
                    </Row>

                    <Row className="menu_2">
                        <Col xl={3}>
                            <Navbar.Toggle aria-controls="navbarScroll"/>
                            <Navbar.Collapse id="navbarScroll" className="menu_2">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{maxHeight: '100px'}}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to={"/"}>Strona główna</Nav.Link>
                                    <NavDropdown title="Zawodnicy" id="navbarClimbersDropdown">
                                        <NavDropdown.Item as={Link} to={"/climbers"}>Zobacz
                                            wszystkich</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"/climber-add"}>Dodaj
                                            zawodnika</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"/climber-remove"}>Usuń
                                            zawodnika</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Wyniki LEAD" id="navbarResultsDropdown">
                                        <NavDropdown.Item as={Link} to={"/results/lead"}>Zobacz
                                            wszystkie</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"/result/lead/add"}>Dodaj
                                            wynik</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Wyniki SPEED" id="navbarResultsDropdown">
                                        <NavDropdown.Item as={Link} to={"/results/speed"}>Zobacz
                                            wszystkie</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"/result/speed/add"}>Dodaj
                                            wynik</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Wyniki BOULDER" id="navbarResultsDropdown">
                                        <NavDropdown.Item as={Link} to={"/results/boulder"}>Zobacz
                                            wszystkie</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"/result/boulder/add"}>Dodaj
                                            wynik</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/climbers" element={<Climbers/>}/>
                <Route path="/climber-add" element={<ClimberAdd/>}/>
                <Route path="/climber-remove" element={<ClimberRemove/>}/>
                <Route path="/results/lead" element={<LeadResults/>}/>
                <Route path="/result/lead/add" element={<LeadResultAdd/>}/>
                <Route path="/results/speed" element={<SpeedResults/>}/>
                <Route path="/result/speed/add" element={<SpeedResultAdd/>}/>
                <Route path="/results/boulder" element={<BoulderResults/>}/>
                <Route path="/result/boulder/add" element={<BoulderResultAdd/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </Router>)
    }
}
