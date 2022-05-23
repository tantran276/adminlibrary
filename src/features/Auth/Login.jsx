import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authAPI } from "../../services";
import Alert from "../Common/Components/Alert/Alert";
import Button from "../Common/Components/Button/Button";
import Input from "../Common/Components/Input/Input";
import { setUser } from "../Common/Slices/userSlice";
import storage from "../Common/Utils/storage";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const redirectURL = searchParams.get("redirect");
    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        authAPI
            .loginWithUsernameAndPassword(username, password)
            .then((userData) => {
                const { token } = userData;
                storage.set("token", token);
                return authAPI.getMe();
            })
            .then((userData) => {
                dispatch(setUser(userData));
                if (redirectURL) {
                    navigation(redirectURL, { replace: true });
                } else {
                    navigation("/");
                }
            })
            .catch((error) => {
                setIsSubmitting(false);
                setErrorMessage(error?.response?.message || "Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
            });
    };

    useEffect(() => {
        setErrorMessage("");
    }, [username]);

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 shadow-md shadow-gray-100 rounded-xl sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Đăng nhập</h5>
                    {errorMessage && <Alert title={errorMessage || ""} type="error" />}
                    <Input
                        label="Username"
                        id="username"
                        name="username"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        label="Mật khẩu"
                        name="password"
                        id="password"
                        type="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                />
                            </div>
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Remember me
                            </label>
                        </div>
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        Đăng nhập
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
