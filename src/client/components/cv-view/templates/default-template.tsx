import { CV } from "@types";
import React from "react";

// Possible to add more customization like size, etc.
export const DefaultTemplate = (props: { cv: CV }) => {
    const { cv: {
        basic_info: basicInfo
    } } = props

    return (
        <>
            <div className="basic-info">
                <div className="name-container">
                    <span>{basicInfo.firstName}</span>
                    <span>{basicInfo.lastName}</span>
                    <span className="occupation">{basicInfo.occupation}</span>
                </div>
                <div className="basic-info__other-info">
                    <div className="personal-pic">
                        <img src={`/assets/${basicInfo.photo || "nopic.jpg"}`} />
                    </div>
                    <div className="socials">
                        {basicInfo.socials?.linkedin &&
                            <img src="/assets/socials/linkedin.png" onClick={() => window.open(basicInfo.socials.linkedin, '_blank')} />
                        }
                        {basicInfo.socials?.github &&
                            <img src="/assets/socials/github.png" onClick={() => window.open(basicInfo.socials.github, '_blank')} />
                        }
                        <img src="/assets/socials/mail.jpg" onClick={() => window.location.href = `mailto:${basicInfo.email}`} />
                    </div>
                </div>
            </div>
        </>

    )
}