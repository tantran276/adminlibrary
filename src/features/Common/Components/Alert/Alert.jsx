import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Alert = ({ title, message, className, type }) => {
    const colorClassNames = {
        error: "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800",
    };

    return (
        <div
            className={twMerge("p-4 mb-4 text-sm  rounded-lg ", colorClassNames[String(type)], className)}
            role="alert"
        >
            {!message ? (
                title
            ) : (
                <>
                    <span className="font-medium">{title}</span>
                    {message}
                </>
            )}
        </div>
    );
};

Alert.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
};

export default Alert;
