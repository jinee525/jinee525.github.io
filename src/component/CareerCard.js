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
  box-shadow: 1px 2px 4px -1px rgb(0 0 0 / 30%);
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

const SummarySection = styled.div`
  display: flex;
  .info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    .company {
      font-size: larger;
      font-weight: bold;
      .link {
        font-size: smaller;
        color: ${colorDict.lightText};
        &:hover {
          cursor: pointer;
          color: ${colorDict.darkText};
        }
      }
    }
    .date {
      color: ${colorDict.lightText};
    }
  }
`;

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  .summary {
    margin: 10px 0px;
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

const BoxWrapper = styled.div`
  disply: flex;
  flex-display: column;
  border-left: solid 2px ${colorDict.darkText};
  padding-left: 10px;
  margin: 10px 0px;

  .title {
    display: flex;
    flex-direction: row;
    font-weight: bold;
    .sub {
      margin-left: 10px;
      font-weight: normal;
      color: ${colorDict.lightText};
    }
  }
  .content {
    margin: 10px 0px;
  }
  .chipContainer {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    font-size: smaller;
  }
  .link {
    font-size: smaller;
    color: ${colorDict.lightText};
    &:hover {
      cursor: pointer;
    }
  }
`;

const ImgContainer = styled.div`
  background-color: ${colorDict.lightText50};
  width: 100%;
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .imgWrapper {
    padding: 10px;
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
  }
`;

const getChips = (items) => {
  return items.map((item, index) => {
    return <Chip key={index}>{item}</Chip>;
  });
};

const getProjectBox = (projects) => {
  return projects.map((item, index) => {
    return (
      <BoxWrapper key={index}>
        <div className="title">
          {item.title}
          <div className="sub">
            {item.boundary.map((item, index) => {
              return <span key={index}>#{item} </span>;
            })}
          </div>
        </div>
        <p className="content">{item.content}</p>
        {item.url && (
          <a className="link" href={item.url} target="_blank" rel="noreferrer">
            {item.url}
          </a>
        )}
        <div className="chipContainer">{getChips(item.tech)}</div>
        {item.preview && (
          <ImgContainer>
            <div className="imgWrapper">
              <Img src={item.preview[0]} alt="preview" />
            </div>
            <div className="imgWrapper">
              <Img src={item.preview[1]} alt="preview" />
            </div>
          </ImgContainer>
        )}
      </BoxWrapper>
    );
  });
};

const CareerCard = (props) => {
  const { item: careers } = props;
  const { logo, company, projects, date, url, summary } = careers;

  return (
    <CustomCard key={careers.id}>
      <ContentWrapper>
        <SummarySection>
          <ImgWrapper>
            <Img src={logo} alt="logo" />
          </ImgWrapper>
          <div className="info">
            <span className="company">
              {company}{' '}
              <a className="link" href={url} target="_blank" rel="noreferrer">
                {url}
              </a>
            </span>
            <span className="date">{date}</span>
          </div>
        </SummarySection>
        <ProjectSection>
          <div className="summary">{summary}</div>
          {getProjectBox(projects)}
        </ProjectSection>
      </ContentWrapper>
    </CustomCard>
  );
};

export default CareerCard;
