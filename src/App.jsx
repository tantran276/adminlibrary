import { BrowserRouter } from "react-router-dom";
import CommonRoutes from "./app/Routes/CommonRoutes";

const App = () => {
    return (
        <BrowserRouter>
            <CommonRoutes />
        </BrowserRouter>
    );
};

export default App;
