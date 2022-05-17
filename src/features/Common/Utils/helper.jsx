const setDocumentTitle = (title) => {
    window.document.title = `${title} - ${process.env.REACT_APP_WEBSITE_NAME}`;
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// eslint-disable-next-line import/prefer-default-export
export { setDocumentTitle };
