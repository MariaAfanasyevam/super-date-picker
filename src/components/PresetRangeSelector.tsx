import React from 'react';

const presets = [
    { label: 'Last 15 minutes', offset: 15 },
    { label: 'Last 1 hour', offset: 60 },
    { label: 'Today', offset: 24 * 60 },
];

export const PresetRangeSelector: React.FC<{
    onSelect: (range: { start: Date; end: Date }) => void;
}> = ({ onSelect }) => {
    const now = new Date();
    return (
        <select onChange={(e) => {
            const minutes = Number(e.target.value);
            onSelect({
                start: new Date(now.getTime() - minutes * 60 * 1000),
                end: now,
            });
        }}>
            <option value="">Select preset</option>
            {presets.map(p => (
                <option key={p.label} value={p.offset}>{p.label}</option>
            ))}
        </select>
    );
};


