import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import logo from '../assets/logo.png';
import Avatar from '@mui/material/Avatar';

function Navbar(props) {
    return (
        <Container
            sx={{
                display: "flex",
                backgroundColor: "aqua",
                paddingTop: "5px",
                paddingBottom: "5px"
            }}
            maxWidth={false}
        >
            <Avatar
                src={logo}
                alt={"logo"}
                sx={{
                    width: "75px",
                    height: "75px"
                }}
            />
            <Container
                sx={{
                    display: "flex",
                    margin: 0,
                    justifyItems: "flex-start",
                }}
                maxWidth={false}
            >
                <Button>Our Services</Button>
                <Button>Contact Us</Button>
                <Button>About Us</Button>
                <Button>Galleries</Button>
            </Container>
        </Container>
    );
}

export default Navbar;