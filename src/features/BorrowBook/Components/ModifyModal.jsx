import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "../../Common/Components/Button/Button";
import Input from "../../Common/Components/Input/Input";
import Modal from "../../Common/Components/Modal/Modal";

const ModifyModal = ({ book: bookData, onSubmit, onClose, ...otherProps }) => {
    const [book, setBook] = useState({});
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
        const submitAction = bookData ? "edit" : "add";
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
        if (bookData) {
            setBook(bookData);
        }
        setBook({});
    }, [bookData]);

    return (
        <Modal className="p-10 pt-6 pb-10" {...otherProps}>
            <div className="flex items-center justify-between pb-6 border-b-2 border-gray-100">
                <div className="font-semibold">
                    {book.id ? (
                        <div>
                            Sửa sách <span>#{book.id}</span>
                        </div>
                    ) : (
                        "Thêm sách"
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
                    label="ISBN"
                    containerClassName="mb-6"
                    value={bookData?.isbn}
                    name="isbn"
                    required
                    onChange={handleChangeInput}
                />
                <Input
                    label="Title"
                    containerClassName="mb-6"
                    value={bookData?.title}
                    name="title"
                    required
                    onChange={handleChangeInput}
                />
                <Input
                    label="Tags"
                    containerClassName="mb-6 col-span-2"
                    value={bookData?.tags}
                    onChange={handleChangeInput}
                    name="tags"
                    multiple
                />
                <Input
                    label="Authors"
                    containerClassName="mb-6 col-span-2"
                    value={bookData?.authors}
                    onChange={handleChangeInput}
                    name="authors"
                    multiple
                />
                <Input
                    label="Publisher"
                    containerClassName="mb-6"
                    value={bookData?.publisher}
                    name="publisher"
                    required
                    onChange={handleChangeInput}
                />
                <Input
                    label="Category"
                    containerClassName="mb-6"
                    value={bookData?.category}
                    name="category"
                    required
                    onChange={handleChangeInput}
                />
                <Input
                    label="Content"
                    containerClassName="mb-6"
                    value={bookData?.content}
                    onChange={handleChangeInput}
                    name="content"
                    required
                />
                <Input
                    label="Price"
                    containerClassName="mb-6"
                    value={bookData?.price}
                    onChange={handleChangeInput}
                    name="price"
                    required
                />
                <Input
                    type="date"
                    label="Publish Date"
                    containerClassName="mb-6 col-span-2"
                    value={bookData?.createDate}
                    onChange={handleChangeInput}
                    name="createDate"
                    required
                />
                <Button type="submit" className="w-full col-span-2 mt-2" disabled={isSubmitting && false}>
                    Xác nhận
                </Button>
            </form>
        </Modal>
    );
};

ModifyModal.propTypes = {
    book: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ModifyModal;