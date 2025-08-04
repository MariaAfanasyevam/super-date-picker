import React from 'react';

const intervals = [
    { label: 'Off', value: 0 },
    { label: '5 sec', value: 5000 },
    { label: '1 min', value: 60000 },
    { label: '15 min', value: 15 * 60000 },
];

export const RefreshIntervalSelector: React.FC<{
    value: number;
    onChange: (val: number) => void;
}> = ({ value, onChange }) => (

    <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
        {intervals.map(i => (
            <option key={i.value} value={i.value}>{i.label}</option>
        ))}
    </select>
);
