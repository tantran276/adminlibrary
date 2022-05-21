import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, ...otherProps }) => {
    return (
        <button
            type="button"
            className={twMerge(
                "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-opacity-40",
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
};

export default Button;
