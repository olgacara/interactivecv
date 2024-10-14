import { CV } from "@types";
import React, { useState } from "react";
import { ProgressBar } from "@widgets";
import { Tooltip } from 'react-tooltip'

// Possible to add more customization like size, etc.
export const DefaultTemplate = (props: { cv: CV }) => {
    const { cv: {
        basic_info: basicInfo,
        education,
        experience,
        skills,
        hobbies,
        languages
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
                        <img src={`/assets/profile-pics/${basicInfo.photo || "nopic.jpg"}`} />
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
                <h3 className="work-experience__header">Erfaring</h3>
                {experience.map((entry, ind) => <WorkEntry key={`exp-${ind}`} entry={entry} />)}
            </div>

            {/* For skills/hobbies/projects */}
            <div className="bottom-container">
                <div className="skills__container">
                    <h3 className="skills__header">Kompetencer</h3>
                    <div className="skills__list">
                        {skills.map((entry, ind) => <SkillEntry key={`skill-${ind}`} entry={entry} />)}
                    </div>
                </div>

                <div className="languages__container">
                    <h3 className="languages__header">Sprog</h3>
                    <div className="languages__list">
                        {languages.map((entry, ind) => <LanguageEntry key={`lang-${ind}`} entry={entry} />)}
                    </div>
                </div>

                <div className="hobbies__container">
                    <h3 className="hobbies__header">Hobbyer</h3>
                    <div className="hobbies__list">
                        {hobbies.map((entry, ind) => <HobbyEntry key={`hobby-${ind}`} entry={entry} index={ind} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

const WorkEntry = ({ entry }: { entry: CV['experience'][number] }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);
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

const SkillEntry = ({ entry }: { entry: CV['skills'][number] }) => {
    const { label, level } = entry

    return <div className="skills__item">
        <span className="skills__item--label">{label}</span>
        <ProgressBar level={level} readOnly={true} />
    </div>
}

const LanguageEntry = ({ entry }: { entry: CV['languages'][number] }) => {
    const { label, level } = entry
    const circles = Array(5).fill(0);

    return <div className="languages__item">
        <span className="languages__item--label">{label}</span>
        <div className="languages__item--proficiency">
            {circles.map((_, ind) => (
                <div
                    key={`lang-prof-${ind}`}
                    className={`circle ${ind < level ? 'filled' : 'unfilled'}`}
                />
            ))}
        </div>
    </div>
}

const HobbyEntry = ({ entry, index }: { entry: CV['hobbies'][number]; index: number; }) => {
    const { logo, info } = entry

    return <div className="hobbies__item">
        <img id={`hobby-img-${index}`} src={`/assets/${logo}`} />
        {info && <Tooltip className="tooltip" place="left" anchorSelect={`#hobby-img-${index}`}>
            <div className="tooltip__container">
                <span className="tooltip__header">{info.heading}</span>
                {info.description && <span className="tooltip__description">{info.description}</span>}
            </div>
        </Tooltip>}
    </div>
}
