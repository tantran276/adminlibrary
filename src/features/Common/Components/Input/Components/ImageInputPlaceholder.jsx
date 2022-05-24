import PropTypes from "prop-types";
import { BiImageAdd } from "react-icons/bi";
import { BsImages } from "react-icons/bs";
import { IoReloadOutline } from "react-icons/io5";

const ImageInputPlaceholder = ({ multiple = false, collapsed = false }) => {
    if (collapsed) {
        return (
            <div className="flex items-center justify-center px-2 h-14">
                <div className="mr-2 text-gray-400">
                    {multiple ? <BiImageAdd size={20} /> : <IoReloadOutline size={20} />}
                </div>
                <div className="text-gray-400">
                    {multiple ? "Nhấn để chọn thêm hình ảnh" : "Nhấn để chọn hình ảnh khác"}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center p-10">
            <BsImages size={60} className="text-gray-300" />
            <div className="mt-4 text-gray-400">Nhấn để chọn hình ảnh</div>
        </div>
    );
};

ImageInputPlaceholder.propTypes = {
    multiple: PropTypes.bool,
    collapsed: PropTypes.bool,
};

export default ImageInputPlaceholder;
