import { BrowserRouter } from "react-router-dom";
import CommonRoutes from "./app/Routes/CommonRoutes";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <CommonRoutes />
            </div>
        </BrowserRouter>
    );
};

export default App;
