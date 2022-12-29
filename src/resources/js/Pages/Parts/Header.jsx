import React, { Fragment } from "react";
import { Navbar } from "react-bootstrap";
import ReactDOM from "react-dom/client";
import {
    Container,
    InputGroup,
    Form,
    Dropdown
} from "react-bootstrap";
import { Link, Router } from "react-router-dom";

function Header()
{
    const logo = "../../../images/logo.png";
    return (
        <Fragment>
            <Navbar
                expand="lg"
                className="main-header side-header navbar navbar-expand-lg navbar-light hor-header"
            >
                <Container>
                    <div className="main-header-left">
                        <div className="hor-logo">
                            <a href="/dashboard" className="main-logo">
                                <img 
                                    src={logo}
                                    alt="Hemominas" 
                                    className="header-brand-img desktop-logo"
                                />
                            </a>
                        </div>        
                    </div>

                    <div className="main-header-center">
                        <InputGroup>
                            <Form.Control 
                                type="search"
                                className="rounded-0"
                                placeholder="Busque por um item..."
                            />
                            <InputGroup.Text className="btn search-btn">
                                <i className="fe fe-search"></i>
                            </InputGroup.Text>
                        </InputGroup>
                        
                    </div>

                    <div className="main-header-right">
                        <div className="navbar navbar-expand-lg nav nav-item navbar-nav-right responsive-navbar navbar-dark">
                            <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent-4">
                                <div className="d-flex order-lg-2 align-items-center ms-auto">
                                    <Dropdown className=" main-header-notification">
                                        <Dropdown.Toggle
                                        className="nav-link icon"
                                        href="#"
                                        variant="default"
                                        >
                                        <i className="fe fe-bell header-icons"></i>
                                        <span className="badge bg-danger nav-link-badge">4</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu style={{ margin: "0px" }}>
                                        <div className="header-navheading">
                                            <p className="main-notification-text">
                                            You have 1 unread notification
                                            <span className="badge bg-pill bg-primary ms-3">
                                                View all
                                            </span>
                                            </p>
                                        </div>
                                        <div className="main-notification-list">
                                            <div className="media new">
                                            <div className="main-img-user online">
                                                <img
                                                alt="avatar"
                                                src="../../assets/img/users/5.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <p>
                                                Congratulate <strong>Olivia James</strong> for New
                                                template start
                                                </p>
                                                <span>Oct 15 12:32pm</span>
                                            </div>
                                            </div>
                                            <div className="media">
                                            <div className="main-img-user">
                                                <img
                                                alt="avatar"
                                                src="../../assets/img/users/2.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <p>
                                                <strong>Joshua Gray</strong> New Message Received
                                                </p>
                                                <span>Oct 13 02:56am</span>
                                            </div>
                                            </div>
                                            <div className="media">
                                            <div className="main-img-user online">
                                                <img
                                                alt="avatar"
                                                src="../../assets/img/users/3.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <p>
                                                <strong>Elizabeth Lewis</strong> added new
                                                schedule realease
                                                </p>
                                                <span>Oct 12 10:40pm</span>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-footer">
                                            <Link to="#">View All Notifications</Link>
                                        </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Navbar.Collapse>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </Fragment>
    );
}

Header.propTypes    = {};
Header.defaultProps = {};

export default Header;