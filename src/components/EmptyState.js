import React from 'react';
import styled from 'styled-components';

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: center;
`;

const EmptyStateIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  color: #bdbdbd;
`;

const EmptyStateTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  color: #424242;
`;

const EmptyStateMessage = styled.p`
  margin: 0;
  color: #757575;
  font-size: 14px;
  max-width: 400px;
  line-height: 1.5;
`;

const EmptyState = ({ 
  icon = '📰', 
  title = '뉴스가 없습니다', 
  message = '선택하신 날짜에 해당하는 뉴스가 없습니다. 다른 날짜를 선택해 주세요.' 
}) => {
  return (
    <EmptyStateContainer>
      <EmptyStateIcon>{icon}</EmptyStateIcon>
      <EmptyStateTitle>{title}</EmptyStateTitle>
      <EmptyStateMessage>{message}</EmptyStateMessage>
    </EmptyStateContainer>
  );
};

export default EmptyState;
