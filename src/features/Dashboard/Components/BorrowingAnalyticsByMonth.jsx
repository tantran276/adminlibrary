import { ResponsiveBar } from "@nivo/bar";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { bookAPI } from "../../../services";
import DatePicker from "./DatePicker";

const BorrowingAnalyticsByMonth = () => {
    const [bookData, setBookData] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(dayjs().get("month").toString().padStart(2, "0"));
    const [selectedYear, setSelectedYear] = useState(dayjs().get("year").toString());

    const standardizeUserData = (data) => {
        const standardizedData = data.reduce((acc, curr) => {
            const { day } = curr;
            const dayString = String(day).padStart(2, "0");
            acc[String(dayString)] = {
                day: dayString,
                "Đang mượn": curr.borrow,
                "Đã trả": curr.return,
            };
            return acc;
        }, {});
        const daysInMonth = dayjs(`${selectedYear}-${selectedMonth}-01`).daysInMonth();
        const monthData = [];

        for (let i = 1; i <= daysInMonth; i += 1) {
            const iteratedDay = String(i).padStart(2, "0");
            const dayData = standardizedData[String(iteratedDay)];

            monthData.push({
                ...dayData,
                day: iteratedDay,
            });
        }

        setBookData(monthData);
    };

    useEffect(() => {
        bookAPI.getAnalyticsByMonth(selectedMonth, selectedYear).then((data) => {
            standardizeUserData(data.data);
        });
    }, [selectedMonth, selectedYear]);

    return (
        <div className="p-6 mt-6 border-2 border-gray-100 rounded-lg shadow-md shadow-gray-100">
            <div className="flex items-center justify-between">
                <div className="font-semibold">Mượn trả sách trong tháng</div>
                <DatePicker
                    month={selectedMonth}
                    year={selectedYear}
                    onChangeMonth={setSelectedMonth}
                    onChangeYear={setSelectedYear}
                />
            </div>
            <div className="w-full pt-6 mt-6 border-t-2 border-gray-100 h-96">
                <ResponsiveBar
                    data={bookData}
                    keys={["Đang mượn", "Đã trả"]}
                    indexBy="day"
                    colorBy="id"
                    margin={{ top: 0, right: 0, bottom: 64, left: 44 }}
                    padding={0.3}
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={["#fdc7a2", "#f97316"]}
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
                        legend: "Sách",
                        legendPosition: "end",
                        legendOffset: -40,
                    }}
                    label={({ value }) => value || ""}
                    role="application"
                    legends={[
                        {
                            dataFrom: "keys",
                            anchor: "bottom",
                            direction: "row",
                            justify: false,
                            translateY: 60,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: "left-to-right",
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: "hover",
                                    style: {
                                        itemOpacity: 1,
                                    },
                                },
                            ],
                        },
                    ]}
                    ariaLabel="Borrowing Book Analytics"
                />
            </div>
        </div>
    );
};

export default BorrowingAnalyticsByMonth;
