import PropTypes from "prop-types";

const ReservingRowActions = ({ id, onClick }) => {
    const handleClick = (action, itemId) => {
        onClick(action, itemId);
    };

    return (
        <div className="flex items-center justify-end space-x-4">
            <div
                className="text-blue-500 cursor-pointer font-semibold"
                onClick={() => handleClick("accept", id)}
                role="button"
                tabIndex={0}
            >
                Accept
            </div>
            <div
                className="text-blue-500 cursor-pointer font-semibold"
                onClick={() => handleClick("renewal", id)}
                role="button"
                tabIndex={0}
            >
                Renewal
            </div>
            <div
                className="text-red-500 cursor-pointer font-semibold"
                onClick={() => handleClick("cancel", id)}
                role="button"
                tabIndex={0}
            >
                Cancel
            </div>
        </div>
    );
};

ReservingRowActions.propTypes = {
    id: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ReservingRowActions;