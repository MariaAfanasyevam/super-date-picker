import React from 'react';
import { format } from 'date-fns';

export const RecentRanges: React.FC<{
    items: { start: Date; end: Date }[];
    onSelect: (start: Date, end: Date) => void;
}> = ({ items, onSelect }) => (
    <div>
        <strong>Недавно использованные диапазоны</strong>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map((range, idx) => (
                <li key={idx}>
                    <button onClick={() => onSelect(range.start, range.end)}>
                        {format(range.start, 'Pp')} – {format(range.end, 'Pp')}
                    </button>
                </li>
            ))}
        </ul>
    </div>
);
