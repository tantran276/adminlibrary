import { Book, Profile2User } from "iconsax-react";
import OverviewItem from "./OverviewItem";

const Overview = () => {
    return (
        <div className="grid grid-cols-3 gap-x-6">
            <OverviewItem
                title="Người dùng"
                icon={<Profile2User size="60" variant="Bulk" className="text-blue-500" />}
            />
            <OverviewItem
                title="Sách"
                number={500}
                icon={<Book size="60" variant="Bulk" className="text-orange-500" />}
            />
        </div>
    );
};

export default Overview;
