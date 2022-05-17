import PropTypes from "prop-types";
import Modal from "../../Common/Components/Modal/Modal";

const ModifyModal = ({ book, onClose, ...otherProps }) => {
    if (!book) return null;

    return (
        <Modal className="p-10" {...otherProps}>
            <div className="flex items-center justify-between">
                <div className="font-semibold">
                    Modify Book
                    <span>#{book.id}</span>
                </div>
                <div
                    className="px-4 py-2 text-sm font-semibold bg-gray-100 rounded-lg border-2 border-transparent hover:border-gray-200 hover:bg-gray-200"
                    role="button"
                    tabIndex={0}
                    onClick={() => onClose(false)}
                >
                    Close
                </div>
            </div>
        </Modal>
    );
};

ModifyModal.propTypes = {
    book: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ModifyModal;
