import PropTypes from "prop-types";
import { memo } from "react";
import { twMerge } from "tailwind-merge";

const PaginationPage = memo(({ pageNumber, activated, ...otherProps }) => {
    return (
        <li {...otherProps}>
            <div
                className={twMerge(
                    "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer",
                    activated &&
                        "text-blue-600 bg-blue-50 border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                )}
            >
                {pageNumber}
            </div>
        </li>
    );
});

PaginationPage.propTypes = {
    pageNumber: PropTypes.number.isRequired,
    activated: PropTypes.bool,
};

PaginationPage.defaultProps = {
    activated: false,
};

export default PaginationPage;
