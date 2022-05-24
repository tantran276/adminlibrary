import PropTypes from "prop-types";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "../../Common/Components/Button/Button";
import Input from "../../Common/Components/Input/Input";
import Modal from "../../Common/Components/Modal/Modal";
import Alert from "../../Common/Components/Alert/Alert";

const BorrowModal = ({ errorMessage, onSubmit, onClose, ...otherProps }) => {
    const [formValues, setFormValues] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChangeInput = (e, value) => {
        const { name, attributes } = e.target;
        setFormValues((prevState) => ({
            ...prevState,
            [name]: {
                value,
                required: attributes.required,
            },
        }));
    };

    const handleSubmitForm = (e) => {
        const submitData = Object.keys(formValues).reduce((acc, key) => {
            acc[String(key)] = formValues[String(key)].value;
            return acc;
        }, {});
        e.preventDefault();
        setIsSubmitting(true);
        onSubmit(submitData, () => {
            setIsSubmitting(false);
        });
    };

    return (
        <Modal className="p-10 pt-6 pb-10" {...otherProps}>
            <div className="flex items-center justify-between pb-6 border-b-2 border-gray-100">
                <div className="font-semibold">Muon sach</div>
                <div
                    className="px-3 py-1.5 text-sm font-semibold bg-gray-100 border-2 border-transparent rounded-lg hover:border-gray-200 hover:bg-gray-200"
                    role="button"
                    tabIndex={0}
                    onClick={() => onClose(false)}
                >
                    <IoClose />
                </div>
            </div>
            {errorMessage && <Alert title={errorMessage} type="error" />}
            <form className="grid grid-cols-2 mt-8 gap-x-8" onSubmit={handleSubmitForm}>
                <Input label="userId" containerClassName="mb-6" name="userId" required onChange={handleChangeInput} />
                <Input label="isbn" containerClassName="mb-6" name="isbn" required onChange={handleChangeInput} />
                <Button type="submit" className="w-full col-span-2 mt-2" disabled={isSubmitting && false}>
                    Muon
                </Button>
            </form>
        </Modal>
    );
};
BorrowModal.propTypes = {
    errorMessage: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};
export default BorrowModal;
