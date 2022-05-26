import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { IoClose, IoTrashOutline } from "react-icons/io5";
import Alert from "../Alert/Alert";
import Button from "../Button/Button";
import Modal from "./Modal";

const ActionConfirmModal = ({ actionModal, title, open, description, onConfirm, onClose, ...otherProps }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleClickConfirmButton = () => {
        setIsSubmitting(true);
        onConfirm(
            () => {
                setIsSubmitting(false);
                setErrorMessage("");
            },
            (error) => {
                setIsSubmitting(false);
                setErrorMessage(error.response.message);
            }
        );
    };

    useEffect(() => {
        if (open) {
            setIsSubmitting(false);
        }
    }, [open]);

    return (
        <Modal open={open} onClose={onClose} className="pt-6" {...otherProps}>
            <div className="flex items-center justify-between px-8 pb-6 border-b-2 border-gray-100">
                <div className="flex items-center text-red-500">
                    <IoTrashOutline className="mr-4" size={20} />
                    <div className="font-semibold">{title}</div>
                </div>
                <div
                    className="px-3 py-1.5 text-sm font-semibold bg-gray-100 border-2 border-transparent rounded-lg hover:border-gray-200 hover:bg-gray-200"
                    role="button"
                    tabIndex={0}
                    onClick={() => onClose(false)}
                >
                    <IoClose />
                </div>
            </div>
            <div className="px-8 mt-6">
                {errorMessage && <Alert title={errorMessage || ""} type="error" />}
                {description}
            </div>
            <div className="flex items-center justify-end px-8 py-4 mt-8 bg-gray-100 border-t-2 border-gray-100">
                <Button
                    className=""
                    type="submit"
                    color="danger"
                    onClick={handleClickConfirmButton}
                    disabled={isSubmitting}
                >
                    Xác nhận
                </Button>
            </div>
        </Modal>
    );
};

ActionConfirmModal.propTypes = {
    actionModal: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ActionConfirmModal;
