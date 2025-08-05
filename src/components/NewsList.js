import React, { useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const NewsList = ({ newsItems }) => {
  const [expandedItemId, setExpandedItemId] = useState(null);

  const handleItemClick = (id) => {
    // Toggle expanded state: if already expanded, collapse it; otherwise expand it
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  return (
    <NewsListContainer>
      {newsItems.map((newsItem) => (
        <NewsItem
          key={newsItem.sumNewsId}
          newsItem={newsItem}
          isExpanded={expandedItemId === newsItem.sumNewsId}
          onClick={() => handleItemClick(newsItem.sumNewsId)}
        />
      ))}
    </NewsListContainer>
  );
};

export default NewsList;
