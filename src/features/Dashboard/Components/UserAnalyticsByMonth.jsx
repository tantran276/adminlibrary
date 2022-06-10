import { ResponsiveBar } from "@nivo/bar";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { userAPI } from "../../../services";

const UserAnalyticsByMonth = () => {
    const [userData, setUserData] = useState([]);
    const [availableMonths, setAvailableMonths] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(dayjs().get("month").toString().padStart(2, "0"));
    const [availableYears] = useState([2022, 2021, 2020]);
    const [selectedYear, setSelectedYear] = useState(dayjs().get("year").toString());

    const standardizeUserData = (data) => {
        const daysInMonth = dayjs(`${selectedYear}-${selectedMonth}-01`).daysInMonth();
        const monthData = [];
        for (let i = 1; i <= daysInMonth; i += 1) {
            monthData.push({
                day: i,
                users: data[String(i).padStart(2, "0")] || 0,
            });
        }
        setUserData(monthData);
    };

    useEffect(() => {
        userAPI.getAnalyticsByMonth(selectedMonth, selectedYear).then((data) => {
            standardizeUserData(data.data);
        });
    }, [selectedMonth, selectedYear]);

    useEffect(() => {
        const currentYear = dayjs().get("year");
        const currentMonth = dayjs().get("month");
        const months = [];
        let maxAvailableMonth = currentMonth - 1;

        if (selectedYear < currentYear) {
            maxAvailableMonth = 11;
        }

        for (let i = 1; i <= maxAvailableMonth + 1; i += 1) {
            months.push(String(i).padStart(2, "0"));
        }

        setAvailableMonths(months);
    }, [selectedYear]);

    return (
        <div className="p-6 mt-6 border-2 border-gray-100 rounded-lg shadow-md shadow-gray-100">
            <div className="flex items-center justify-between">
                <div className="font-semibold">Người dùng trong tháng</div>
                <div className="flex items-center justify-center pl-6 text-sm font-semibold border-l-2 border-gray-200">
                    <div>Tháng</div>
                    <select
                        name="userAnalyticsMonthSelect"
                        id="userAnalyticsMonthSelect"
                        className="px-1 mx-2 text-sm font-semibold bg-gray-100 border-2 border-gray-200 rounded-md cursor-pointer"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                    >
                        {availableMonths.map((month) => (
                            <option key={month} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                    <div>năm</div>
                    <select
                        name="userAnalyticsYearSelect"
                        id="userAnalyticsYearSelect"
                        className="px-1.5 ml-2 text-sm font-semibold bg-gray-100 border-2 border-gray-200 rounded-md cursor-pointer"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        {availableYears.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="w-full pt-6 mt-6 border-t-2 border-gray-100 h-96">
                <ResponsiveBar
                    data={userData}
                    keys={["users"]}
                    indexBy="day"
                    colorBy="usersColor"
                    margin={{ top: 0, right: 2, bottom: 40, left: 44 }}
                    padding={0.3}
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={{ scheme: "nivo" }}
                    borderColor={{
                        from: "color",
                        modifiers: [["darker", 1.6]],
                    }}
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
                    barAriaLabel={(e) => {
                        return `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`;
                    }}
                />
            </div>
        </div>
    );
};

export default UserAnalyticsByMonth;
