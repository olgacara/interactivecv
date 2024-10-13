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
                    {/* Redirect from "/" to "/list". At the moment use the one with id 1 */}
                    <Route path="/" element={<Navigate to="/list/1" />} />

                    {/* Route for /list */}
                    <Route path="/list/:id" element={<CVView />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

