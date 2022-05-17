import PropTypes from "prop-types";

const TableRow = ({ data }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            {Object.keys(data).map((key) => (
                <td
                    key={key}
                    className="px-6 py-4 whitespace-nowrap border-b dark:border-gray-700"
                >
                    {data[String(key)]}
                </td>
            ))}
        </tr>
    );
};

TableRow.propTypes = {
    data: PropTypes.object,
};

TableRow.defaultProps = {
    data: {},
};

export default TableRow;
