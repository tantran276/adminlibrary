import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import TableRow from "./TableRow";

const Table = ({ columns, dataSource, className, ...otherProps }) => {
    return (
        <div
            className={twMerge(
                "relative overflow-x-auto border-2 border-gray-100 sm:rounded-lg w-full",
                className
            )}
            {...otherProps}
        >
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.dataIndex}
                                className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                            >
                                {column.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataSource.map((item) => (
                        <TableRow key={item.id} data={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

Table.propTypes = {
    columns: PropTypes.array,
    dataSource: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string,
};

Table.defaultProps = {
    columns: [],
    dataSource: [],
    className: "",
};

export default Table;
