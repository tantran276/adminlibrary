import PropTypes from "prop-types";
import { Modal } from "reactstrap";

const DeleteConfirmModal = ({ title, description, ...otherProps }) => {
    return (
        <Modal {...otherProps}>
            {title}
            {description}
        </Modal>
    );
};

DeleteConfirmModal.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default DeleteConfirmModal;
