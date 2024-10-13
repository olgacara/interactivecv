import { NavigationItem } from "@types";
import { classNames } from "@widgets/helper";

const navigationItems: NavigationItem[] = [
    { label: "CV list", path: "/list" }
]

const isSelected = (item: NavigationItem) => {
    const { pathname, search } = window.location
    return item.path.includes(`${pathname}${search}`)
}

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <aside className="sidebar__content">
                <nav className="navigation">
                    <ul className="navigation__list">
                        {navigationItems.map((item, ind) => (
                            <li key={`nav-${ind}`} className="navigation__item">
                                <a href={item.path} className={classNames(
                                    "navigation__link",
                                    isSelected(item) && "navigation__link__active"
                                )}>
                                    <span className="navigation__text">{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </div>
    );
}

