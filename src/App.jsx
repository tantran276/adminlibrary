import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CommonRoutes from "./app/Routes/CommonRoutes";
import store from "./app/store";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <CommonRoutes />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
