import PropTypes from "prop-types";
import React from "react";
import { useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const SidebarMenu = ({ children, ...otherProps }) => {
    const { pathname } = useLocation();

    return (
        <ul className="space-y-2 mt-8" {...otherProps}>
            {React.Children.map(children, (child) => {
                if (child.type === SidebarItem) {
                    const { to } = child.props;
                    const activated = pathname === to;

                    return React.cloneElement(child, { activated });
                }

                return child;
            })}
        </ul>
    );
};

SidebarMenu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SidebarMenu;
