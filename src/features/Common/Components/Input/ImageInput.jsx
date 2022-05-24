import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { generateURLFromFiles } from "../../Utils/helpers";
import ImageInputPlaceholder from "./Components/ImageInputPlaceholder";
import ImageInputPreview from "./Components/ImageInputPreview";

const ImageInput = ({ label, containerClassName, multiple, onChange, ...otherProps }) => {
    const [inputValues, setInputValues] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const inputRef = useRef();

    const handleChangeInput = () => {
        setInputValues(() => {
            const selectedInputFiles = inputRef.current.files;
            return selectedInputFiles;
        });
    };

    const handleRemoveImage = (imageFile) => {
        const inputFileName = imageFile.name;
        const newInputValues = Array.from(inputValues).filter((inputFile) => inputFile.name !== inputFileName);
        setInputValues(newInputValues);
    };

    useEffect(() => {
        setPreviewImages(generateURLFromFiles(inputValues));
        if (onChange) {
            onChange(
                {
                    target: inputRef.current,
                },
                inputValues
            );
        }
    }, [inputValues]);

    return (
        <div className={twMerge(containerClassName, "group")}>
            <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {label}
            </label>
            <div className="relative block w-full text-sm text-gray-900 border-2 border-gray-300 rounded-lg outline-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 group-focus-within:ring-blue-500 group-focus-within:border-blue-500">
                <input
                    ref={inputRef}
                    type="file"
                    className="absolute inset-0 outline-none opacity-0"
                    onChange={handleChangeInput}
                    {...otherProps}
                />
                <ImageInputPlaceholder collapsed={inputValues.length > 0} />
            </div>
            <div className="mt-2">
                {previewImages.map((image, index) => (
                    <ImageInputPreview
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        src={image}
                        file={inputValues[Number(index)]}
                        alt="Preview Images"
                        onRemove={handleRemoveImage}
                    />
                ))}
            </div>
        </div>
    );
};

ImageInput.propTypes = {
    label: PropTypes.string.isRequired,
    containerClassName: PropTypes.string,
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
};

export default ImageInput;
