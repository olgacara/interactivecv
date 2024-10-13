import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CVView } from "./cv-view";

export const MainPage = () => {

    return (
        <div className="main-content">
            <div className="main-header">
                <h1 className="main-page-title" id="main-page-title">CV View</h1>
            </div>
            <BrowserRouter>
                <Routes>
                    {/* Redirect from "/" to "/list" */}
                    <Route path="/" element={<Navigate to="/list" />} />

                    {/* Route for /list */}
                    <Route path="/list" element={<CVView />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

