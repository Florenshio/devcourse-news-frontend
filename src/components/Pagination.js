import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 8px;
`;

const PageButton = styled.button`
  background-color: ${props => props.isActive ? '#4285f4' : '#ffffff'};
  color: ${props => props.isActive ? '#ffffff' : '#333333'};
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  font-size: 14px;
  min-width: 40px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.isActive || props.disabled ? '' : '#f0f0f0'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.3);
  }
`;

const PageInfo = styled.div`
  margin: 0 10px;
  font-size: 14px;
  color: #666;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Maximum number of page buttons to show
    
    if (totalPages <= maxPagesToShow) {
      // If total pages is less than or equal to maxPagesToShow, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);
      
      // Calculate start and end of page range
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if at the beginning
      if (currentPage <= 3) {
        endPage = Math.min(totalPages - 1, 4);
      }
      
      // Adjust if at the end
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(2, totalPages - 3);
      }
      
      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always include last page
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };
  
  return (
    <PaginationContainer>
      <PageButton 
        onClick={() => onPageChange(1)} 
        disabled={currentPage === 1}
        aria-label="처음 페이지"
      >
        &laquo;
      </PageButton>
      
      <PageButton 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        aria-label="이전 페이지"
      >
        &lt;
      </PageButton>
      
      {getPageNumbers().map((page, index) => (
        page === '...' ? (
          <PageInfo key={`ellipsis-${index}`}>...</PageInfo>
        ) : (
          <PageButton
            key={page}
            onClick={() => onPageChange(page)}
            isActive={currentPage === page}
            aria-label={`${page} 페이지`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </PageButton>
        )
      ))}
      
      <PageButton 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        aria-label="다음 페이지"
      >
        &gt;
      </PageButton>
      
      <PageButton 
        onClick={() => onPageChange(totalPages)} 
        disabled={currentPage === totalPages}
        aria-label="마지막 페이지"
      >
        &raquo;
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
