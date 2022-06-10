import PropTypes from "prop-types";

const OverviewItem = ({ title, number, icon }) => {
    return (
        <div className="flex items-center justify-between px-6 py-5 border-2 border-gray-100 rounded-lg shadow-md shadow-gray-100">
            {icon}
            <div className="flex flex-col items-end">
                <div className="text-sm">{title}</div>
                <div className="mt-2 text-2xl font-semibold">
                    {number && number}
                    {!number && (
                        <div className="w-5 h-5 mt-2 border-2 border-black rounded-full animate-spin border-t-transparent" />
                    )}
                </div>
            </div>
        </div>
    );
};

OverviewItem.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number,
    icon: PropTypes.element.isRequired,
};

export default OverviewItem;
