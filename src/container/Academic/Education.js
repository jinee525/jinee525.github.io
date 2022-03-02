import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';

import ProjectCard from '../../component/ProjectCard';
import SimpleCard from '../../component/SimpleCard';
import { gameProjects, UXAIProjects, clubs } from '../../data/projects';
import { colorDict } from '../../helpers/colors';

const Chip = styled.div`
  width: auto;
  height: auto;
  padding: 6px 12px;
  margin: 0px 8px 8px;
  border-radius: 8px;
  background-color: ${colorDict.lightBackground};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Section = styled.div`
  margin: 20px 0px;
  flex-direction: column;
  display: flex;
  .title {
    font-size: larger;
    font-weight: bold;
  }

  .univ {
    margin: 20px 0px 0px 8px;

    li {
      display: flex;
      list-style: none;
    }
  }

  .flexContainer {
    width: 100%;
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  margin-right: 5px;
`;

const getProjectCards = (projects) => {
  return projects.map((item) => {
    return (
      <ProjectCard item={item} />
    );
  });
};

// const getClubCards = (clubs) => {
//   return clubs.map((item) => {
//     return (
//       <Grid item key={item.id}>
//         <SimpleCard item={item} />
//       </Grid>
//     );
//   });
// };

const getClubCards = (clubs) => {
  return clubs.map((item, index) => {
    return <Chip key={index}>{item.data.title}</Chip>;
  });
};

const Education = () => {
  return (
    <Wrapper>
      <Section>
        <span className="title">Education</span>
        <span className="univ">
          <li>
            <IconWrapper>
              <SchoolIcon />
            </IconWrapper>
            <span>EWHA Univ</span>
          </li>
          <li>컴퓨터공학 (전공), 스크랜튼학부 디지털인문학 (복수전공)</li>
          <li>4.2/4.5 (총 151학점)</li>
          <li>TOEIC 945, TOEIC Speaking level7</li>
        </span>
      </Section>
      <Section>
        <span className="title">Game Projects</span>
        <div className="flexContainer">
          {getProjectCards(gameProjects)}
        </div>
      </Section>
      <Section>
        <span className="title">UX/UI Projects, AI PROJECTS</span>
        <div className="flexContainer">
          {getProjectCards(UXAIProjects)}
        </div>
      </Section>
      <Section>
        <span className="title">Activities</span>
        <div className="flexContainer">
          <Grid container>{getClubCards(clubs)}</Grid>
        </div>
      </Section>
    </Wrapper>
  );
};

export default Education;
