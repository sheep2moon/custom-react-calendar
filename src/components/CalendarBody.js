import {
  addDays,
  differenceInCalendarDays,
  getDate,
  getDay,
  startOfMonth,
  subDays,
} from 'date-fns';
import { endOfMonth } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { daysNames } from '../commons/calendarDesc';

const CalendarBody = ({ currentMonth, startWithSunday = true }) => {
  const [calendarDays, setCalendarDays] = useState([]);
  const [monthInfo, setMonthInfo] = useState({
    monthStart: null,
    monthEnd: null,
  });

  useEffect(() => {
    const firstDayDiff = startWithSunday ? 0 : 6;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startWith = subDays(monthStart, getDay(monthStart) + firstDayDiff);
    const endWith = addDays(monthEnd, 6 - getDay(monthEnd));
    const daysCount = differenceInCalendarDays(endWith, startWith);
    let days = [];
    for (let i = 0; i < daysCount + 1; i++) {
      days.push(addDays(startWith, i));
    }
    setCalendarDays(days);
    setMonthInfo({ monthStart, monthEnd });
    console.log(startWith < endWith);
  }, [currentMonth, startWithSunday]);

  return (
    <TableWrap>
      <ColumnNames>
        {daysNames.map((day) => (
          <ColumnName key={day}>{day}</ColumnName>
        ))}
      </ColumnNames>
      <Cells>
        {calendarDays.length > 0 &&
          calendarDays.map((day, index) => {
            const isCurrentMonth =
              day >= monthInfo.monthStart && day <= monthInfo.monthEnd;
            return (
              <DayCell key={index} isCurrentMonth={isCurrentMonth}>
                <p>{getDate(day)}</p>
              </DayCell>
            );
          })}
      </Cells>
    </TableWrap>
  );
};

export default CalendarBody;

const TableWrap = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  width: 28em;
  transition: all 0.2s ease-in-out;
`;
const ColumnNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  color: ${({ theme }) => theme.primary};
  border-left: ${({ theme }) => `1px solid ${theme.primary}`};
  border-right: ${({ theme }) => `1px solid ${theme.primary}`};
  background-color: ${({ theme }) => theme.light};
`;
const ColumnName = styled.p`
  font-size: 1.4em;
  line-height: 1.6em;
  text-align: center;
`;

const Cells = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(7, 1fr);
  transition: all 0.2s ease-in-out;
`;

const DayCell = styled.div`
  transition: all 0.1s ease-in-out;
  width: 4em;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  outline: 1px solid #ffffff06;
  opacity: ${({ isCurrentMonth }) => (isCurrentMonth ? 1 : 0.4)};
  :hover {
    box-shadow: ${({ theme }) => `inset 0 0 12px 2px #ffffff10`};
    cursor: pointer;
  }
`;
