import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "../../Common/Components/Button/Button";
import Input from "../../Common/Components/Input/Input";
import Modal from "../../Common/Components/Modal/Modal";

const ModifyModal = ({ user: userData, onSubmit, onClose, ...otherProps }) => {
    const [user, setUser] = useState({});
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
        const submitAction = userData ? "edit" : "add";
        const submitData = Object.keys(formValues).reduce((acc, key) => {
            acc[String(key)] = formValues[String(key)].value;
            return acc;
        }, {});
        e.preventDefault();
        setIsSubmitting(true);
        onSubmit(submitAction, submitData, () => {
            setIsSubmitting(false);
        });
    };

    // const validateFormValue = useCallback((data) => {
    //     let isValid = true;

    //     isValid = Object.keys(data).some((key) => {
    //         const { value, required } = data[String(key)];
    //         if (required && !value) {
    //             return true;
    //         }
    //         return false;
    //     });

    //     return isValid;
    // }, []);

    // useEffect(() => {
    //     setIsAllowSubmit(validateFormValue(formValues));
    // }, [formValues]);

    useEffect(() => {
        if (userData) {
            setUser(userData);
        }
        setUser({});
    }, [userData]);
    console.log(user);
    return (
        <Modal className="p-10 pt-6 pb-10" {...otherProps}>
            <div className="flex items-center justify-between pb-6 border-b-2 border-gray-100">
                <div className="font-semibold">
                    {user.id ? (
                        <div>
                            Sửa tai khoan <span>#{user.id}</span>
                        </div>
                    ) : (
                        "Thêm tai khoan"
                    )}
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
            <form className="grid grid-cols-2 mt-8 gap-x-8" onSubmit={handleSubmitForm}>
                <Input
                    label="First Name"
                    containerClassName="mb-6"
                    value={userData?.firstName}
                    name="firstName"
                    required
                    onChange={handleChangeInput}
                />
                <Input
                    label="Last Name"
                    containerClassName="mb-6"
                    value={userData?.lastName}
                    name="lastName"
                    required
                    onChange={handleChangeInput}
                />
                <Input
                    label="Email"
                    containerClassName="mb-6"
                    value={userData?.email}
                    onChange={handleChangeInput}
                    name="email"
                    required
                />
                <Input
                    type="date"
                    label="Date Of Birth"
                    containerClassName="mb-6 col-span-2"
                    value={userData?.publisher}
                    name="dateOfBirth"
                    required
                    onChange={handleChangeInput}
                />
                <Input
                    label="Roles"
                    containerClassName="mb-6"
                    value={userData?.roles}
                    name="roles"
                    onChange={handleChangeInput}
                    multiple
                />
                <Button type="submit" className="w-full col-span-2 mt-2" disabled={isSubmitting && false}>
                    Xác nhận
                </Button>
            </form>
        </Modal>
    );
};

ModifyModal.propTypes = {
    user: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ModifyModal;
