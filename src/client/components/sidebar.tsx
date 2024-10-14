import { CV, NavigationItem } from "@types";
import { classNames } from "@widgets/helper";
import { useEffect, useState } from "react";
import { getCvList } from "../web";
import reactLogo from "/assets/react-logo.svg"

const navigationItems: NavigationItem[] = [
    { label: "CV liste", path: "/list" }
]

const isSelected = (id: number) => {
    const { pathname, search } = window.location
    return `/list/${id}`.includes(`${pathname}${search}`)
}

export const Sidebar = () => {
    const [cvs, setCvs] = useState<CV[]>([])
    useEffect(() => {
        getCvList()
            .then(res => {
                setCvs(res)
            })
            .catch(error => console.log(error)) // Handle errors
    }, [])

    return (
        <div className="sidebar">
            <aside className="sidebar__content">
                <div className="sidebar__logo">
                    <img src="/assets/react-logo.svg" />
                </div>
                <nav className="navigation">
                    <ul className="navigation__list">
                        {cvs.map((item, ind) => (
                            <li key={`nav-${ind}`} className="navigation__item">
                                <a href={`/list/${item.id}`} className={classNames(
                                    "navigation__link",
                                    isSelected(item.id) && "navigation__link--active"
                                )}>
                                    <span className="navigation__text">{item.cv_label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </div>
    );
}

