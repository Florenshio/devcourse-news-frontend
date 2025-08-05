import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

const NewsItemContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const NewsItemHeader = styled.div`
  padding: 16px 20px;
`;

const NewsTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  color: #333;
`;

const NewsMetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 14px;
`;

const NewsAuthor = styled.span`
  font-weight: 500;
`;

const NewsSource = styled.span`
  background-color: #f0f0f0;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 12px;
`;

const NewsExpandedContent = styled.div`
  padding: 0 20px;
  max-height: ${props => props.isExpanded ? '500px' : '0'};
  opacity: ${props => props.isExpanded ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
`;

const NewsSummary = styled.div`
  margin-bottom: 16px;
  line-height: 1.6;
  color: #333;
  white-space: pre-line;
`;

const NewsUrlContainer = styled.div`
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-top: 1px solid #eee;
  padding-top: 12px;
`;

const NewsUrl = styled.a`
  color: #4285f4;
  text-decoration: none;
  font-size: 14px;
  display: inline-block;
  
  &:hover {
    text-decoration: underline;
  }
`;

const NewsItem = ({ newsItem, isExpanded, onClick }) => {
  // Extract data from the newsItem
  const { news, summarizedContent, source } = newsItem;
  
  return (
    <NewsItemContainer onClick={onClick}>
      <NewsItemHeader>
        <NewsTitle>{news.title}</NewsTitle>
        <NewsMetaInfo>
          <div>
            {news.author && <NewsAuthor>{news.author}</NewsAuthor>}
            <span> • {format(new Date(news.publishedAt), 'yyyy.MM.dd HH:mm')}</span>
          </div>
          <NewsSource>{source.newsPublisher} - {source.newsCategory}</NewsSource>
        </NewsMetaInfo>
      </NewsItemHeader>
      
      <NewsExpandedContent isExpanded={isExpanded}>
        <NewsSummary>
          {summarizedContent}
        </NewsSummary>
        
        <NewsUrlContainer>
          <NewsUrl href={news.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            원문 기사 보기 →
          </NewsUrl>
        </NewsUrlContainer>
      </NewsExpandedContent>
    </NewsItemContainer>
  );
};

export default NewsItem;
