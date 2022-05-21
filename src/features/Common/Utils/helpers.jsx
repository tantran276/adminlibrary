const setDocumentTitle = (title) => {
    window.document.title = `${title} - ${process.env.REACT_APP_WEBSITE_NAME}`;
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const redirectTo = (path, includeRedirectParam = false) => {
    const currentLocation = window.location.href;
    const currentURL = new URL(currentLocation);
    const redirectURL = new URL(path, currentURL.origin);
    if (includeRedirectParam) {
        redirectURL.searchParams.set("redirect", currentURL.pathname);
    }
    window.location.href = redirectURL.href;
};

// eslint-disable-next-line import/prefer-default-export
export { setDocumentTitle, redirectTo };
