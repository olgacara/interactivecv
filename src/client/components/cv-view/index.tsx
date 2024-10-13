import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const CVViewTitle = (props: { cvLabel: string }) => {
    const [mainPageTitleElement, setMainPageTitleElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const element = document.getElementById('main-page-title');
        if (element) {
            element.innerHTML = ''
        }

        setMainPageTitleElement(element);
    }, []);

    return mainPageTitleElement
        ? createPortal(
            `CV view: ${props.cvLabel || "No name"}`,
            mainPageTitleElement
        )
        : null
}

export const CVView = () => {

    return (
        <>
            <CVViewTitle cvLabel={"CV 1"} />
            <div className="cv-container">
                Yeehaa
            </div>
        </>

    );
}

