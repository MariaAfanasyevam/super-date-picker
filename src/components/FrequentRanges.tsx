import React from 'react';

const ranges = [
    { label: 'Today', start: () => new Date(new Date().setHours(0, 0, 0, 0)), end: () => new Date() },
    { label: 'Yesterday', start: () => {
            const d = new Date();
            d.setDate(d.getDate() - 1);
            d.setHours(0, 0, 0, 0);
            return d;
        }, end: () => {
            const d = new Date();
            d.setDate(d.getDate() - 1);
            d.setHours(23, 59, 59, 999);
            return d;
        }},
    { label: 'Last 7 days', start: () => new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), end: () => new Date() },
];

export const FrequentRanges: React.FC<{
    onSelect: (start: Date, end: Date) => void;
}> = ({ onSelect }) => (
    <div>
        <strong>Часто используемые даты</strong>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {ranges.map(r => (
                <li key={r.label}>
                    <button onClick={() => onSelect(r.start(), r.end())}>
                        {r.label}
                    </button>
                </li>
            ))}
        </ul>
    </div>
);
