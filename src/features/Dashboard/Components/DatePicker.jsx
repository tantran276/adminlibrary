import dayjs from "dayjs";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const DatePicker = ({ month: selectedMonth, year: selectedYear, onChangeMonth, onChangeYear }) => {
    const [availableMonths, setAvailableMonths] = useState([]);
    const [availableYears] = useState([2022, 2021, 2020]);

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
        <div className="flex items-center justify-center pl-6 text-sm font-semibold border-l-2 border-gray-200">
            <div>Tháng</div>
            <select
                name="userAnalyticsMonthSelect"
                id="userAnalyticsMonthSelect"
                className="px-1 mx-2 text-sm font-semibold bg-gray-100 border-2 border-gray-200 rounded-md cursor-pointer"
                value={selectedMonth}
                onChange={(e) => onChangeMonth(e.target.value)}
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
                onChange={(e) => onChangeYear(e.target.value)}
            >
                {availableYears.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
};

DatePicker.propTypes = {
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    onChangeMonth: PropTypes.func.isRequired,
    onChangeYear: PropTypes.func.isRequired,
};

export default DatePicker;
