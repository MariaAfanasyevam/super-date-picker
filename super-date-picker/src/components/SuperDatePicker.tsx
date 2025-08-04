import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import updateIcon from '../assets/update-icon.svg';
import { PresetRangeSelector } from './PresetRangeSelector';
import { CustomRangeInput } from './CustomRangeInput';
import { RefreshIntervalSelector } from './RefreshIntervalSelector';
import { FrequentRanges } from './FrequentRanges';
import { RecentRanges } from './RecentRanges';
import calendarIcon from "../assets/calendar.svg"

export const SuperDatePicker: React.FC = () => {
    const [startDate, setStartDate] = useState<Date>(new Date(Date.now() - 3600 * 1000));
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [refreshInterval, setRefreshInterval] = useState<number>(0);
    const [recentRanges, setRecentRanges] = useState<{ start: Date; end: Date }[]>([]);
    const [showQuickRanges, setShowQuickRanges] = useState(false);

    const toggleQuickRanges = () => {
        setShowQuickRanges(prev => !prev);
    };

    const handleApply = () => {
        const newRange = { start: startDate, end: endDate };
        setRecentRanges(prev => {
            const exists = prev.find(p => p.start.getTime() === newRange.start.getTime() && p.end.getTime() === newRange.end.getTime());
            const updated = exists ? prev : [newRange, ...prev];
            return updated.slice(0, 5); // максимум 5 последних
        });

    };

    return (
        <div className="super-date-picker">
            <div className="picker-header">
                <PresetRangeSelector onSelect={(range) => {
                    setStartDate(range.start);
                    setEndDate(range.end);
                }}/>
                <CustomRangeInput
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(start, end) => {
                        setStartDate(start);
                        setEndDate(end);
                    }}
                />
                <button onClick={toggleQuickRanges} id="calendar-button" title="Быстрый выбор">
                <img className="calendar-img" src={calendarIcon} alt="calendar"/>
                </button>
                <div className="select-text">Select refresh interval</div>
                <RefreshIntervalSelector
                    value={refreshInterval}
                    onChange={setRefreshInterval}
                />

                <div className="button2"></div>
                <button id="refresh-button" onClick={handleApply}>
                    <img src={updateIcon} alt="refresh"/>
                    <span className="text">Refresh</span>
                </button> {showQuickRanges && (
                <div className="quick-range-panel">
                    <FrequentRanges
                        onSelect={(start, end) => {
                            setStartDate(start);
                            setEndDate(end);
                            setShowQuickRanges(false);
                        }}
                    />
                    <RecentRanges
                        items={recentRanges}
                        onSelect={(start, end) => {
                            setStartDate(start);
                            setEndDate(end);
                            setShowQuickRanges(false);
                        }}
                    />
                </div>
            )}
            </div>
        </div>
    );
};
