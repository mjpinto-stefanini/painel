import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const App = () => {
    return (
        <Fragment>
            <div className="horizontalMenuContainer">
                <div className="page">
                    <Header />
                    <Sidebar />
                    <div className="main-content hor-content">
                        <div className="main-container container">
                            <div className="inner-body">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}

export default App;