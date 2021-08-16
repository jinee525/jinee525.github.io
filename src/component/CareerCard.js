import React from 'react';
import styled from 'styled-components';

import { colorDict } from '../helpers/colors';

const Chip = styled.div`
  width: auto;
  height: auto;
  padding: 6px 12px;
  margin: 4px 8px;
  border-radius: 8px;
  background-color: ${colorDict.lightBackground};
`;

const CustomCard = styled.div`
  width: 860px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%);
  border-radius: 4px;
  padding: 40px 20px 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  border-radius: 8px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    background-color: ${colorDict.lightBackground};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .desc {
    margin: 6px 0px;
  }
  .techList {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
  }
`;

const TopSection = styled.div`
  display: flex;
  .info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    .title {
      font-size: larger;
      font-weight: bold;
    }
    .date {
      color: ${colorDict.lightText};
    }
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 75px;
  height: 75px;
`;

const Img = styled.img`
  max-width: 100%;
`;

const getChips = (items) => {
  return items.map((item) => {
    return <Chip>{item}</Chip>;
  });
};

const CareerCard = (props) => {
  const { item: careers } = props;
  const { logo, title, desc, tech, date } = careers.data;

  return (
    <CustomCard key={careers.id}>
      <ContentWrapper>
        <TopSection>
          <ImgWrapper>
            <Img src={logo} alt="logo" />
          </ImgWrapper>
          <div className="info">
            <span className="title">{title}</span>
            <span className="date">{date}</span>
          </div>
        </TopSection>
        <span className="desc">{desc}</span>
        <div className="techList">{getChips(tech)}</div>
      </ContentWrapper>
    </CustomCard>
  );
};

export default CareerCard;
