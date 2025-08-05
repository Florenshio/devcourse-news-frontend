import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  background-color: #fff0f0;
  border-left: 4px solid #ff3b30;
  border-radius: 4px;
  padding: 16px 20px;
  margin: 20px 0;
  color: #d32f2f;
  display: flex;
  align-items: center;
`;

const ErrorIcon = styled.div`
  font-size: 24px;
  margin-right: 12px;
`;

const ErrorContent = styled.div`
  flex: 1;
`;

const ErrorTitle = styled.h4`
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 600;
`;

const ErrorText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`;

const ErrorMessage = ({ title = '오류가 발생했습니다', message }) => {
  return (
    <ErrorContainer>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorContent>
        <ErrorTitle>{title}</ErrorTitle>
        <ErrorText>{message}</ErrorText>
      </ErrorContent>
    </ErrorContainer>
  );
};

export default ErrorMessage;
