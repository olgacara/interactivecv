import React, { useState, MouseEvent } from "react";
import "./scss/progress-bar.scss";

export const ProgressBar = ({ level, readOnly = true }: { readOnly?: boolean; level: number; }) => {
    const [progress, setProgress] = useState<number>(level);

    const handleDrag = (event: MouseEvent<HTMLDivElement>) => {
        if (readOnly) {
            return;
        }

        const bar = event.currentTarget.getBoundingClientRect(); // Progress bar's dimensions
        const newProgress = ((event.clientX - bar.left) / bar.width) * 100;

        if (newProgress >= 0 && newProgress <= 100) {
            setProgress(newProgress);
        } else {
            setProgress(newProgress > 100 ? 100 : 0);
        }
    };

    return (
        <div className="progress-bar__container">
            <div className="progress-bar__track" onMouseDown={handleDrag}>
                <div className="progress-bar__fill" style={{ width: `${progress}%` }}></div>
                <div
                    className="progress-bar__ball"
                    style={{ left: `calc(${progress}% - 10px)` }}
                    onMouseDown={(e) => e.preventDefault()}
                />
            </div>
        </div>
    );
};
