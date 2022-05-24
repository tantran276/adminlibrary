import PropTypes from "prop-types";
import { FiTrash2 } from "react-icons/fi";

const ImageInputPreview = ({ src, alt, file = {}, onRemove }) => {
    return (
        <div className="flex items-center p-1 border-2 border-gray-300 rounded-lg bg-gray-50 h-14">
            <div className="h-full aspect-square">
                <img src={src} alt={alt} className="object-cover object-center w-full h-full rounded-md" />
            </div>
            <div className="flex-1 ml-3 text-sm break-all line-clamp-1">{file.name}</div>
            <div
                className="flex items-center justify-center w-8 h-8 ml-2 mr-2 text-red-500 duration-150 border-2 border-red-200 rounded-full cursor-pointer bg-red-50 hover:border-red-400 hover:bg-red-100"
                onClick={() => onRemove(file)}
                role="button"
                tabIndex={0}
            >
                <FiTrash2 />
            </div>
        </div>
    );
};

ImageInputPreview.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    file: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
};

export default ImageInputPreview;
