import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const OverviewItem = ({ title, number, icon, description }) => {
    return (
        <div className="px-6 py-5 border-2 border-gray-100 rounded-lg shadow-md shadow-gray-100">
            <div className="flex items-center justify-between">
                {icon}
                <div className="flex flex-col items-end">
                    <div className="text-sm">{title}</div>
                    <div className="mt-2 text-2xl font-semibold">
                        {number && number}
                        {!number && (
                            <div className="w-5 h-5 mt-3 border-2 border-black rounded-full animate-spin border-t-transparent" />
                        )}
                    </div>
                </div>
            </div>
            <div className="pt-4 mt-6 border-t-2 border-gray-100">
                {description?.map((item) => (
                    <div key={item.title} className="flex items-center justify-between h-7">
                        <div className="flex items-center space-x-4">
                            <div className={twMerge("w-2 h-2 bg-gray-100 rounded-full mt-0.5", item.className)} />
                            <div className="text-sm">{item.title}</div>
                        </div>
                        <div className="ml-2 font-semibold">
                            {item.number && item.number}
                            {!item.number && (
                                <div className="w-3 h-3 mt-1 border-2 border-black rounded-full animate-spin border-t-transparent" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

OverviewItem.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number,
    icon: PropTypes.element.isRequired,
    description: PropTypes.array,
};

export default OverviewItem;
