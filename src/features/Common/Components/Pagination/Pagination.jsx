import PropTypes from "prop-types";
import PaginationButton from "./PaginationButton";
import PaginationPage from "./PaginationPage";

const Pagination = ({ totalPages, currentPage, onChangePage }) => {
    const handleClickPaginationItem = (page) => {
        if (page === currentPage) {
            return null;
        }
        if (page < 1) {
            return onChangePage(1);
        }
        if (page > totalPages) {
            return onChangePage(totalPages);
        }
        return onChangePage(page);
    };

    return (
        <nav
            className="flex justify-center mt-8"
            aria-label="Page navigation example"
        >
            <ul className="inline-flex items-center -space-x-px">
                <PaginationButton
                    currentPage={currentPage}
                    incrementValue={-1}
                    onChangePage={handleClickPaginationItem}
                />
                {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                        <PaginationPage
                            key={pageNumber}
                            pageNumber={pageNumber}
                            activated={pageNumber === currentPage}
                            onClick={() =>
                                handleClickPaginationItem(pageNumber)
                            }
                        />
                    );
                })}
                <li>
                    <div
                        className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={() =>
                            handleClickPaginationItem(currentPage + 1)
                        }
                        role="button"
                        tabIndex={0}
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
};

export default Pagination;
