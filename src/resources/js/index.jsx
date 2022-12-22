import React, { Fragment } from "react";
import { Navbar } from "react-bootstrap";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/********************************* COMPONENTS **************************************/
import Loader from "./components/Loader";
import Header from './components/Header';

const App = React.lazy(() => import('./components/App'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

const Root = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <React.Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route index element={<Dashboard />} />
                            <Route>
                                <Route
                                    path="/dashboard"
                                    element={<Dashboard />}
                                />
                            </Route>
                        </Route>
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);