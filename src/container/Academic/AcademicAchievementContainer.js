import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import ProjectCard from '../../component/ProjectCard';
import { projects } from '../../data/projects';
const Wrapper = styled.div``;
const Section = styled.div``;

const AcademicAchievementContainer = () => {
  return (
    <Wrapper>
      학업 성취
      <Section>
        <Grid item key={projects.id}>
          <ProjectCard item={projects} />
        </Grid>
      </Section>
    </Wrapper>
  );
};

export default AcademicAchievementContainer;
