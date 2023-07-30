import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import GenresModal from './Genres/GenresModal';
import { viewNavigate } from '../utils/animationNavigate';

const NavBar = () => {

    const [showGenres, setShowGenres] = useState(false);

    const navigate = useNavigate()

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand as={Link} to="/">Movies App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={ () => viewNavigate("/",navigate)} >Movies</Nav.Link>
                            <Nav.Link onClick={ () => viewNavigate("/actors",navigate)} >Actors</Nav.Link>
                            <Nav.Link onClick={ () => viewNavigate("/directors",navigate)} >Directors</Nav.Link>
                            <Nav.Link onClick={ () => setShowGenres(true)}>Genres</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <GenresModal 
                show={showGenres} 
                handleClose={() => setShowGenres(false)} 
            />
        </>
    );
};

export default NavBar;