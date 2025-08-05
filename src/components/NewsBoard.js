import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DateSelector from './DateSelector';
import NewsList from './NewsList';
import Pagination from './Pagination';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import EmptyState from './EmptyState';
import { fetchNewsByDate } from '../services/api';
import { format } from 'date-fns';

const NewsBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NewsBoard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const formattedDate = format(selectedDate, 'yyyy-MM-dd');
        const response = await fetchNewsByDate(formattedDate);
        setNewsItems(response);
        setTotalPages(Math.ceil(response.length / itemsPerPage));
        setCurrentPage(1); // Reset to first page when date changes
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('뉴스를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate current items for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <NewsBoardContainer>
      <DateSelector selectedDate={selectedDate} onDateChange={handleDateChange} />
      
      {loading ? (
        <LoadingSpinner text="뉴스를 불러오는 중입니다..." />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : newsItems.length === 0 ? (
        <EmptyState 
          title="뉴스가 없습니다" 
          message={`${format(selectedDate, 'yyyy년 MM월 dd일')}에 해당하는 뉴스가 없습니다. 다른 날짜를 선택해 주세요.`} 
        />
      ) : (
        <>
          <NewsList newsItems={currentItems} />
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </>
      )}
    </NewsBoardContainer>
  );
};

export default NewsBoard;
