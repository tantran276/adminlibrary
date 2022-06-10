import { ResponsiveBar } from "@nivo/bar";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { userAPI } from "../../../services";
import DatePicker from "./DatePicker";

const UserAnalyticsByMonth = () => {
    const [userData, setUserData] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(dayjs().get("month").toString().padStart(2, "0"));
    const [selectedYear, setSelectedYear] = useState(dayjs().get("year").toString());

    const standardizeUserData = (data) => {
        const daysInMonth = dayjs(`${selectedYear}-${selectedMonth}-01`).daysInMonth();
        const monthData = [];
        for (let i = 1; i <= daysInMonth; i += 1) {
            monthData.push({
                day: i,
                "Người dùng": data[String(i).padStart(2, "0")] || 0,
            });
        }
        setUserData(monthData);
    };

    useEffect(() => {
        userAPI.getAnalyticsByMonth(selectedMonth, selectedYear).then((data) => {
            standardizeUserData(data.data);
        });
    }, [selectedMonth, selectedYear]);

    return (
        <div className="p-6 mt-6 border-2 border-gray-100 rounded-lg shadow-md shadow-gray-100">
            <div className="flex items-center justify-between">
                <div className="font-semibold">Người dùng mới trong tháng</div>
                <DatePicker
                    month={selectedMonth}
                    year={selectedYear}
                    onChangeMonth={setSelectedMonth}
                    onChangeYear={setSelectedYear}
                />
            </div>
            <div className="w-full pt-6 mt-6 border-t-2 border-gray-100 h-96">
                <ResponsiveBar
                    data={userData}
                    keys={["Người dùng"]}
                    indexBy="day"
                    margin={{ top: 0, right: 2, bottom: 40, left: 44 }}
                    padding={0.3}
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={["#3b82f6"]}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Ngày",
                        legendPosition: "end",
                        legendOffset: 32,
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Người dùng",
                        legendPosition: "end",
                        legendOffset: -40,
                    }}
                    label={({ value }) => value || ""}
                    role="application"
                    ariaLabel="User Analytics"
                />
            </div>
        </div>
    );
};

export default UserAnalyticsByMonth;
