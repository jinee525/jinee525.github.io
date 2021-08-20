import React from 'react';
import styled, { css } from 'styled-components';
import { colorDict } from '../helpers/colors';

const selectedTabStyle = `
  border-bottom: 5px solid ${colorDict.darkText};
  padding-bottom: 0px;
  color: ${colorDict.darkText};
  font-weight: bold;
`;

const defaultTabStyle = `
  border-bottom: 1px solid ${colorDict.lightText};
  padding-bottom: 4px;
  color: ${colorDict.lightText};
`;

const Tab = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-decoration: none;

  ${({ isSelected }) =>
    isSelected
      ? css`
          ${selectedTabStyle}
        `
      : css`
          ${defaultTabStyle}
        `}

  &:hover {
    cursor: pointer;
  }

  @media (hover: hover) {
    &:hover {
      color: ${colorDict.darkText};
      font-weight: bold;
    }
  }
`;

const TabWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  background-color: #fff;
`;

function tabProps(index) {
  return {
    id: `mypage-tab-${index}`,
  };
}

const MyWorksTabs = ({ currentTabValue, handleTabValue }) => {
  const onChangeTabValue = (newValue) => {
    handleTabValue(newValue);
  };

  return (
    <TabWrapper>
      <Tab isSelected={currentTabValue === 0} onClick={() => onChangeTabValue(0)} {...tabProps(0)}>
        Education
      </Tab>
      <Tab isSelected={currentTabValue === 1} onClick={() => onChangeTabValue(1)} {...tabProps(1)}>
        Work Experience
      </Tab>
    </TabWrapper>
  );
};

export default MyWorksTabs;
