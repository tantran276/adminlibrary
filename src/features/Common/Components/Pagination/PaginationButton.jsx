import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const PaginationButton = ({ currentPage, incrementValue, onChangePage }) => {
    return (
        <li>
            <div
                onClick={() => onChangePage(currentPage + incrementValue)}
                className={twMerge(
                    "block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                    incrementValue === 1 ? "rotate-180" : ""
                )}
                role="button"
                tabIndex={0}
            >
                <span className="sr-only">
                    {incrementValue === 1 ? "Next" : "Previous"}
                </span>
                <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className={twMerge("w-5 h-5")}
                >
                    <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </li>
    );
};

PaginationButton.propTypes = {
    currentPage: PropTypes.number.isRequired,
    incrementValue: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
};

export default PaginationButton;
