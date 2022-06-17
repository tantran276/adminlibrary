import { Book, Profile2User } from "iconsax-react";
import { useEffect, useState } from "react";
import { bookAPI, userAPI } from "../../../services";
import OverviewItem from "./OverviewItem";

const Overview = () => {
    const [bookData, setBookData] = useState();
    const [countUser, setCountUser] = useState(0);
    useEffect(() => {
        bookAPI.getLifetimeAnalytics().then((data) => {
            setBookData(data.data);
        });
        userAPI.countUsers().then((response) => {
            setCountUser(response.data);
        });
    }, []);

    return (
        <div className="grid grid-cols-3 gap-x-6">
            <OverviewItem
                title="Người dùng"
                number={countUser}
                icon={<Profile2User size="60" variant="Bulk" className="text-blue-500" />}
            />
            <OverviewItem
                title="Sách"
                number={bookData?.["Tổng số sách"]}
                icon={<Book size="60" variant="Bulk" className="text-orange-500" />}
                description={[
                    {
                        title: "Sách đã mượn",
                        number: bookData?.["Sách đã mượn"],
                        className: "bg-orange-500",
                    },
                    {
                        title: "Sách đang rỗi",
                        number: bookData?.["Sách đang rỗi"],
                        className: "bg-orange-500 bg-opacity-40",
                    },
                ]}
            />
        </div>
    );
};

export default Overview;
