import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import ProjectCard from '../../component/ProjectCard';
import { projects } from '../../data/projects';

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

  .flexContainer {
    width: 100%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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

const AcademicAchievementContainer = () => {
  return (
    <Wrapper>
      <Section>
        <span className="title">전공</span>
        <span className="desc">
          <li>EWHA Univ</li>
          <li>전공: 컴퓨터공학/ 복수전공: 디지털인문학(스크랜튼)</li>
          <li>학점: ~ </li>
        </span>
      </Section>
      <Section>
        <span className="title">동아리 활동</span>
      </Section>
      <Section>
        <span className="title">프로젝트</span>
        <div className="flexContainer">
          <Grid container justify="space-around">
            {getProjectCards(projects)}
          </Grid>
        </div>
      </Section>
    </Wrapper>
  );
};

export default AcademicAchievementContainer;
