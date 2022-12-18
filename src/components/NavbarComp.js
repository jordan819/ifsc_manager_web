import React, {Component} from 'react'
import {Navbar, Nav, NavDropdown, Container, Row, Col} from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
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
import LeadResultRemove from "../Pages/LeadResultRemove";

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
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
                                        <NavDropdown title="Wyniki" id="navbarResultsDropdown">
                                            <NavDropdown.Item as={Link} to={"/results"}>Zobacz
                                                wszystkie</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to={"/result-add"}>Dodaj
                                                wynik</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to={"/result-remove"}>Usuń
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
                    <Route path="/results" element={<LeadResults/>}/>
                    <Route path="/result-add" element={<LeadResultAdd/>}/>
                    <Route path="/result-remove" element={<LeadResultRemove/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </Router>
        )
    }
}
