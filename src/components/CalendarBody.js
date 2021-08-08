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
  }, [currentMonth]);

  return (
    <TableWrap>
      <ColumnNames>
        {daysNames.map((day) => (
          <ColumnName key={day}>{day}</ColumnName>
        ))}
      </ColumnNames>
      <Cells>
        {calendarDays.length > 0 &&
          calendarDays.map((day, index) => (
            <DayCell key={index}>
              <p>{getDate(day)}</p>
            </DayCell>
          ))}
      </Cells>
    </TableWrap>
  );
};

export default CalendarBody;

const TableWrap = styled.div`
  background-color: #eeeeee;
  width: 28em;
`;
const ColumnNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const ColumnName = styled.div``;

const Cells = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(7, 1fr);
`;

const DayCell = styled.div`
  width: 4em;
  height: 4em;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  border: 1px solid #00000010;
`;
