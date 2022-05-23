import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Button = ({ children, color = "primary", className, ...otherProps }) => {
    const colorClassNames = {
        primary:
            "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
        danger: "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
    };

    return (
        <button
            type="button"
            className={twMerge(
                "focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 disabled:bg-opacity-40",
                colorClassNames[String(color)],
                className
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    color: PropTypes.string,
};

export default Button;
