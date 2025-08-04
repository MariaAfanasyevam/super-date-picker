import React from 'react';
import DatePicker from 'react-datepicker';

interface Props {
    startDate: Date;
    endDate: Date;
    onChange: (start: Date, end: Date) => void;
}

export const CustomRangeInput: React.FC<Props> = ({ startDate, endDate, onChange }) => {
    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={(date: Date) => onChange(date, endDate)}
                showTimeSelect
                dateFormat="Pp"
            />
            <DatePicker
                selected={endDate}
                onChange={(date: Date) => onChange(startDate, date)}
                showTimeSelect
                dateFormat="Pp"
            />
        </div>
    );
};
