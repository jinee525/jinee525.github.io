import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: 0 20px;
`;

const MyWorksTabContents = ({ value, index, children }) => {
  return (
    <ContentWrapper>
      <div hidden={value !== index} id={`tabContent-${index}`}>
        {/* 자식컴포넌트호출 */}
        {children}
      </div>
    </ContentWrapper>
  );
};

export default MyWorksTabContents;
