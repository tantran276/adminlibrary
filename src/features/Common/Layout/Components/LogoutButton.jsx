import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../Slices/userSlice";
import storage from "../../Utils/storage";

const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(setUser(null));
        storage.clear();
        navigate("/auth/login");
    };

    return (
        <div
            className="flex items-center justify-center p-4 mx-4 duration-150 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={handleClick}
            role="button"
            tabIndex={0}
        >
            <AiOutlineLogout className="mr-3" size={20} />
            <span>Đăng xuất</span>
        </div>
    );
};

export default LogoutButton;
