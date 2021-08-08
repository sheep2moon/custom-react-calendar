import { addMonths, getMonth, getYear, subMonths } from 'date-fns';
import React, { useState } from 'react';
import styled from 'styled-components';
import CalendarBody from './CalendarBody';
import { months } from '../commons/calendarDesc';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const backwardMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const forwardMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  return (
    <CalendarContainer>
      <CalendarHeading>
        <span onClick={backwardMonth}>back</span>
        <h1>{`${months[getMonth(currentMonth)]} ${getYear(currentMonth)}`}</h1>
        <span onClick={forwardMonth}>forward</span>
      </CalendarHeading>
      <CalendarBody currentMonth={currentMonth} />
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto auto;
`;

const CalendarHeading = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  justify-content: space-between;
`;
