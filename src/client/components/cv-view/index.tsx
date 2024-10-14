import { CV } from "@types";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import { getCvInfo } from "../../web";
import { Spinner } from "@widgets";
import { DefaultTemplate } from "./templates/default-template";
import "@styles/cv-view.scss"

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

const selectTemplate = (cv: CV | null) => {
    if (!cv) {
        return null;
    }

    switch (cv.template) {
        case "default-template":
            return <DefaultTemplate cv={cv} />
        default:
            return <DefaultTemplate cv={cv} />
    }
}

export const CVView = () => {
    const { id } = useParams();
    const [cv, setCv] = useState<CV | null>(null)
    const [isFetching, setFetching] = useState<boolean>(true)

    useEffect(() => {
        if (id) {
            getCvInfo(id)
                .then(res => {
                    setCv(res)
                    setFetching(false)
                })
                .catch(error => console.log(error)) // Handle errors
        }
    }, [id])

    const Template = useMemo(() => selectTemplate(cv), [cv])

    return (
        <>
            <CVViewTitle cvLabel={cv?.cv_label || 'Ingen navn'} />
            {isFetching && <Spinner />}
            <div className="cv-container">
                {Template}
            </div>
        </>

    );
}

