import React, { useState } from 'react';
import styled from 'styled-components';

import { colorDict } from '../helpers/colors';

const Chip = styled.div`
  width: auto;
  height: auto;
  padding: 6px 12px;
  margin: 0px;
  border-radius: 4px;
  border: 1px solid ${colorDict.lightText50};

  //background-color: ${colorDict.lightGrayBackground};
  &:not(:last-child){
    margin-right: 8px;
  }
`;

const CustomCard = styled.div`
  width: 860px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
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
  padding: 20px;
  //border-radius: 4px;
  //background-color: ${colorDict.lightGrayBackground};

  .info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    .company {
      font-size: larger;
      font-weight: bold;
      .link {
        margin-left: 6px;
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
    .summary {
      margin-top: 10px;
      white-space: break-spaces;
      word-break: keep-all;
    }
  }
`;

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 200px;
  margin: 0px;
`;

const Img = styled.img`
  width: 100%;
`;

const BoxWrapper = styled.div`
  disply: flex;
  flex-display: column;
  // border-left: solid 2px ${colorDict.darkText};
  margin: 0 0 32px 0;

  .title {
    padding: 4px 6px;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    color: #ffffff;
    background: linear-gradient(to right, ${colorDict.darkText}, white);
    border-radius: 4px;

    .sub {
      margin-left: 10px;
      font-weight: normal;
    }
  }
  .content {
    margin: 16px 0 0 0;
    white-space: pre-wrap;
  }
  .chipContainer {
    width: 100%;
    margin-top: 16px;
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
  width: 100%;
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .imgWrapper {
    border: solid 1px ${colorDict.lightText50};
    border-radius: 4px;
    margin: 0px;
    overflow: hidden;
    display: flex;
    &:first-child{
      margin-right: 16px;
    }
  }
`;
const Filter = styled.div`
  display:flex;
  margin: 16px 0px;

  .chip-selected,.chip{
    width: auto;
    height: auto;
    font-size: smaller;
    padding: 2px 8px;
    margin: 0 6px 0 0;
    border-radius: 100px;
    border: solid 1px #274c5e;
    &:hover {
      cursor: pointer;
    }
  }
  .chip-selected{
    background-color: #274c5e;
    color: #ffffff;
  }
`;

const SolutionsWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 16px 0 0 0;
.solution{
  display: flex;
  &:first-child{
    text-align: center;
    font-weight: bold;
  }
  &:not(:last-child){
    margin: 0 0 12px 0;
  }
  p{
    border-radius: 4px;
    background-color: ${colorDict.lightGrayBackground};
    margin: 0px;
    padding: 6px 12px;
    word-break: keep-all;
    white-space: break-spaces;

    &:first-child {
      margin-right: 12px;
      max-width: 320px;
      min-width: 320px;
    }
    &:last-child{
      width: 100%;
      background-color: ${colorDict.lightYellowBackground};
    }
  }
}
`;

const getChips = (items) => {
  return items.map((item, index) => {
    return <Chip key={index}>{item}</Chip>;
  });
};

const Solutions = ({ solutions }) => {
  console.log("solutions", solutions)
  return <SolutionsWrapper>
    <div className="solution" ><p>needs & problems</p><p>solutions</p></div>
    {solutions.map(solution => { return <div className="solution"><p>{solution[0]}</p><p>{solution[1]}</p></div> })}
  </SolutionsWrapper>
}
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
        {item.solutions && <Solutions solutions={item.solutions} />}
        {/* {item.url && (
          <a className="link" href={item.url} target="_blank" rel="noreferrer">
            {item.url}
          </a>
        )} */}
        <div className="chipContainer">{getChips(item.tech)}</div>
        {/* {item.preview && (
          <ImgContainer>
            <div className="imgWrapper">
              <Img src={item.preview[0]} alt="preview" />
            </div>
            <div className="imgWrapper">
              <Img src={item.preview[1]} alt="preview" />
            </div>
          </ImgContainer>
        )} */}
      </BoxWrapper>
    );
  });
};

const filters = ['전체', '#FE', '#BE']

const filterProject = (projects, selectedFilter) => {
  if (selectedFilter === 0) return projects;
  else return projects.filter((item) => item.boundary.includes(filters[selectedFilter].substring(1)))
}
const CareerCard = (props) => {
  const { item: careers } = props;
  const { logo, company, projects, date, url, summary } = careers;
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <CustomCard key={careers.id}>
      <ContentWrapper>
        <SummarySection>
          <LogoWrapper>
            <Img src={logo} alt="logo" />
          </LogoWrapper>
          <div className="info">
            <span className="company">
              {company}
              <a className="link" href={url} target="_blank" rel="noreferrer">
                {url}
              </a>
            </span>
            <span className="date">{date}</span>
            <div className="summary">{summary}</div>
          </div>
        </SummarySection>
        <Filter>
          {filters.map((item, index) => { return <div key={index} className={index === selectedFilter ? 'chip-selected' : 'chip'} onClick={() => setSelectedFilter(index)}>{item}</div> })}
        </Filter>
        <ProjectSection>{getProjectBox(filterProject(projects, selectedFilter))}</ProjectSection>
      </ContentWrapper>
    </CustomCard>
  );
};

export default CareerCard;
