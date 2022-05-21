import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

const Input = ({
    value,
    label,
    placeholder,
    containerClassName,
    type = "text",
    icon,
    multiple,
    required,
    onChange,
    onBlur,
    ...otherProps
}) => {
    const [inputValues, setInputValues] = useState([]);
    const [tmpInputValue, setTmpInputValue] = useState("");
    const [isRequired, setIsRequired] = useState(required);

    const inputRef = useRef(null);

    const handlePressEnter = (e) => {
        if (!multiple) {
            return;
        }
        if (e.charCode === 13) {
            e.preventDefault();
            setInputValues([...inputValues, tmpInputValue]);
            setTmpInputValue("");
        }
    };

    const handleChangeInput = (e) => {
        const { value: inputValue } = e.target;
        setTmpInputValue(inputValue);
        if (!multiple) {
            onChange(e, inputValue);
        }
    };

    const handleBlurInput = (e) => {
        const { value: inputValue } = e.target;
        if (!inputValue) {
            if (onBlur) {
                onBlur(e, inputValue);
            }
            return;
        }
        if (multiple) {
            setInputValues([...inputValues, inputValue]);
            setTmpInputValue("");
        }
        if (onBlur) {
            onBlur(e, inputValue);
        }
    };

    const handleClickRemoveItem = (index) => {
        const newValue = [...inputValues];
        newValue.splice(index, 1);
        setInputValues(newValue);
        setTmpInputValue("");
    };

    useEffect(() => {
        if (!value) return;
        if (Array.isArray(value)) {
            setInputValues(value);
            setTmpInputValue("");
        } else {
            setInputValues([value]);
            setTmpInputValue(value);
        }
    }, [value]);

    useEffect(() => {
        onChange({ target: inputRef.current }, multiple ? inputValues : tmpInputValue);
        setIsRequired(false);
    }, [inputValues]);

    useEffect(() => {
        if (!multiple) {
            setIsRequired(required);
        }
    }, [required]);

    return (
        <div className={containerClassName}>
            <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {label}
            </label>
            <div className="relative">
                {icon && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{icon}</div>
                )}
                <input
                    ref={inputRef}
                    type={type}
                    id="input-group-1"
                    className={twMerge(
                        "bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                        icon && "pl-10"
                    )}
                    placeholder={placeholder || label}
                    value={tmpInputValue}
                    required={isRequired}
                    onChange={handleChangeInput}
                    onKeyPress={handlePressEnter}
                    onBlur={handleBlurInput}
                    {...otherProps}
                />
            </div>
            {inputValues?.length > 0 && multiple && (
                <div className="flex items-center justify-start mt-2 space-x-2">
                    {inputValues.map((item, index) => (
                        <div
                            className="flex items-center justify-center px-2 py-1 text-xs border-2 border-blue-200 rounded-lg bg-blue-50"
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            onClick={() => {
                                handleClickRemoveItem(index);
                            }}
                            role="button"
                            tabIndex={0}
                        >
                            {item}
                            <IoClose className="ml-1 text-gray-500" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    containerClassName: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.node,
    multiple: PropTypes.bool,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
};

export default Input;
