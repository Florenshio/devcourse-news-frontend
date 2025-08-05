import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { format, subDays, addDays, isSameDay } from 'date-fns';
import { ko } from 'date-fns/locale';

const DateSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
`;

const DateButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  padding: 0 40px;
`;

const DateButton = styled.button`
  background-color: ${props => props.isSelected ? '#4285f4' : '#ffffff'};
  color: ${props => props.isSelected ? '#ffffff' : '#333333'};
  border: 1px solid #dddddd;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: ${props => props.isSelected ? 'bold' : 'normal'};
  min-width: 100px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.isSelected ? '#4285f4' : '#f0f0f0'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.3);
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #dddddd;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #f0f0f0;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  ${props => props.left ? 'left: 0;' : 'right: 0;'}
`;

const DateSelector = ({ selectedDate, onDateChange }) => {
  const [visibleDates, setVisibleDates] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const maxVisibleDates = 5;
  
  // Initialize dates - today and 9 days before
  useEffect(() => {
    const today = new Date();
    const dates = [];
    
    // Generate 10 dates (today and 9 days before)
    for (let i = 9; i >= 0; i--) {
      dates.push(subDays(today, i));
    }
    
    setVisibleDates(dates);
  }, []);
  
  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      // Add one more date at the beginning
      const newDate = subDays(visibleDates[0], 1);
      setVisibleDates([newDate, ...visibleDates]);
    }
  };
  
  const handleNext = () => {
    if (startIndex < visibleDates.length - maxVisibleDates) {
      setStartIndex(startIndex + 1);
    } else {
      // Add one more date at the end
      const newDate = addDays(visibleDates[visibleDates.length - 1], 1);
      setVisibleDates([...visibleDates, newDate]);
    }
  };
  
  const currentVisibleDates = visibleDates.slice(startIndex, startIndex + maxVisibleDates);
  
  return (
    <DateSelectorContainer>
      <ArrowButton 
        left 
        onClick={handlePrevious}
        aria-label="이전 날짜"
      >
        &lt;
      </ArrowButton>
      
      <DateButtonsContainer>
        {currentVisibleDates.map((date) => (
          <DateButton
            key={format(date, 'yyyy-MM-dd')}
            isSelected={isSameDay(date, selectedDate)}
            onClick={() => onDateChange(date)}
          >
            {format(date, 'M월 d일 (E)', { locale: ko })}
          </DateButton>
        ))}
      </DateButtonsContainer>
      
      <ArrowButton 
        onClick={handleNext}
        aria-label="다음 날짜"
      >
        &gt;
      </ArrowButton>
    </DateSelectorContainer>
  );
};

export default DateSelector;
