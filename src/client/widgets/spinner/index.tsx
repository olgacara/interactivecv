import React from "react";
import "./scss/spinner.scss"

// Possible to add more customization like size, etc.
export const Spinner = () => {

    return (
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
    )
}