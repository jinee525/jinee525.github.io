import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';

import ProjectCard from '../../component/ProjectCard';
import SimpleCard from '../../component/SimpleCard';
import { gameProjects, AIProjects, UXProjects, clubs } from '../../data/projects';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Section = styled.div`
  margin: 20px 0px;

  .title {
    font-size: larger;
    font-weight: bold;
  }

  .desc {
    li {
      display: flex;
      list-style: none;
    }
  }

  .flexContainer {
    width: 100%;
    margin: 20px auto;
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
      <Grid item key={item.id}>
        <ProjectCard item={item} />
      </Grid>
    );
  });
};

const getClubCards = (clubs) => {
  return clubs.map((item) => {
    return (
      <Grid item key={item.id}>
        <SimpleCard item={item} />
      </Grid>
    );
  });
};

const AcademicAchievementContainer = () => {
  return (
    <Wrapper>
      <Section>
        <span className="title"></span>
        <span className="desc">
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
        <span className="title">활동</span>
        <div className="flexContainer">
          <Grid container>{getClubCards(clubs)}</Grid>
        </div>
      </Section>
      <Section>
        <span className="title">게임 개발 프로젝트</span>
        <div className="flexContainer">
          <Grid container justify="space-around">
            {getProjectCards(gameProjects)}
          </Grid>
        </div>
      </Section>
      <Section>
        <span className="title">UX/UI 프로젝트</span>
        <div className="flexContainer">
          <Grid container justify="space-around">
            {getProjectCards(UXProjects)}
          </Grid>
        </div>
      </Section>
      <Section>
        <span className="title">인공지능 프로젝트</span>
        <div className="flexContainer">
          <Grid container justify="space-around">
            {getProjectCards(AIProjects)}
          </Grid>
        </div>
      </Section>
    </Wrapper>
  );
};

export default AcademicAchievementContainer;
