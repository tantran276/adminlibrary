import PropTypes from "prop-types";

const TableRowActions = ({ id, onClick }) => {
    const handleClick = (action, itemId) => {
        onClick(action, itemId);
    };

    return (
        <div className="flex items-center justify-end space-x-4">
            <div
                className="text-red-500 cursor-pointer font-semibold"
                onClick={() => handleClick("delete", id)}
                role="button"
                tabIndex={0}
            >
                Delete
            </div>
        </div>
    );
};

TableRowActions.propTypes = {
    id: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default TableRowActions;
