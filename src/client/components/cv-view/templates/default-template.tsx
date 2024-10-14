import { CV } from "@types";
import React, { useState } from "react";

// Possible to add more customization like size, etc.
export const DefaultTemplate = (props: { cv: CV }) => {
    const { cv: {
        basic_info: basicInfo,
        education,
        experience
    } } = props

    return (
        <>
            <div className="basic-info">
                <div className="name-container">
                    <span>{basicInfo.firstName}</span>
                    <span>{basicInfo.lastName}</span>
                    <span className="occupation">
                        {`${basicInfo.occupation} | ${education.study} | ${education.institution} | ${education.year}`}
                    </span>
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
                        <img src="/assets/socials/mail.png" onClick={() => window.location.href = `mailto:${basicInfo.email}`} />
                    </div>
                </div>
            </div>

            <div className="work-experience">
                <h2 className="work-experience__header">Erfaring</h2>
                {experience.map(entry => <WorkEntry entry={entry} />)}
            </div>
        </>
    )
}

const WorkEntry = ({ entry }: { entry: CV['experience'][number] }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const { position, company, from, to, description, projects } = entry

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    };

    return <div className="work-experience__item">
        <div className="work-experience__item__label">
            <button
                className="expand_button"
                onClick={toggleExpand}
            >
                {isExpanded ? '-' : '+'}
            </button>
            <div className="work-label">
                <span> {`${position} hos ${company}`}</span>
                <span>{`${from} - ${to ? to : 'Nu'}`}</span>
            </div>
        </div>
        {isExpanded && (
            <div className="expanded-info">
                <span>{description}</span>
                {projects?.length > 0 && <ul className="expanded-info__projects--list">
                    {projects.map((project, ind) => (
                        <li key={`exp-proj-${ind}`} className="expanded-info__projects--item">
                            <span className="project__name">{`${project.label}${project.description ? ":" : ""}`}</span>
                            {project.description && <p className="project__description">{project.description}</p>}
                        </li>
                    ))}
                </ul>}
            </div>
        )}
    </div>
}