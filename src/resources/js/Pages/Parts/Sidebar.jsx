import { Fragment } from "react";
import { NavLink } from "react-bootstrap";

const Sidebar = () => {
    return (
        <Fragment>
            <div className="sticky ">
                <div className="main-menu main-navbar hor-menu">
                    <div className="main-container-1 active container">
                        <div className="main-body-1">
                            <ul className="menu-nav nav">
                                <li className="nav-header">
                                    <span className="nav-label">Dashboard</span>
                                </li>
                                <li className="nav-item">
                                    <NavLink href="/dashboard" className="nav-link">
                                        <span className="shape1"></span>
                                        <span className="shape2"></span>
                                        <i className="ti-home hor-icon menu-icon"></i>
                                        <span className="sidemenu-label">Dashboard</span>
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink href="/importar-dados" className="nav-link">
                                        <span className="shape1"></span>
                                        <span className="shape2"></span>
                                        <i className="ti-write hor-icon menu-icon"></i>
                                        <span className="sidemenu-label">Importar</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

Sidebar.propType     = {};
Sidebar.defaultProps = {};

export default Sidebar;