import PropTypes from "prop-types";
import { cloneElement } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const SidebarItem = ({ label, icon, to, activated }) => {
    return (
        <li>
            <Link
                to={to}
                className={twMerge(
                    "flex items-center py-3 pl-4 text-base font-normal text-gray-900 dark:text-white hover:text-blue-500 duration-150 dark:hover:bg-gray-700",
                    activated && "border-r-4 border-blue-500 text-blue-500"
                )}
            >
                {cloneElement(icon, {
                    size: 22,
                })}
                <span className="ml-3">{label}</span>
            </Link>
        </li>
    );
};

SidebarItem.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    to: PropTypes.string.isRequired,
    activated: PropTypes.bool,
};

SidebarItem.defaultProps = {
    activated: false,
};

export default SidebarItem;
