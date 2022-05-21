import PropTypes from "prop-types";
import Modal from "../../Common/Components/Modal/Modal";

const ModifyModal = ({ reservation, onClose, ...otherProps }) => {
    if (!reservation) return null;

    return (
        <Modal className="p-10" {...otherProps}>
            <div className="flex items-center justify-between">
                <div className="font-semibold">
                    Modify Book
                    <span>#{reservation.id}</span>
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
    reservation: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ModifyModal;
