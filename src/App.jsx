import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CommonRoutes from "./app/Routes/CommonRoutes";
import store from "./app/store";

const App = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Trang chủ - {process.env.REACT_APP_WEBSITE_NAME}</title>
                </Helmet>
            </HelmetProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <CommonRoutes />
                </BrowserRouter>
            </Provider>
        </>
    );
};

export default App;
