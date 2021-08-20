import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import CareerCard from '../../component/CareerCard';
import { jobs } from '../../data/infos';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Section = styled.div`
  margin: 20px 0px;
  align-self: center;
`;
const CardContainer = styled.div`
  display: flex;
`;

const getCareerCards = (jobs) => {
  return jobs.map((item) => {
    return (
      <CardContainer key={item.id}>
        <CareerCard item={item} />
      </CardContainer>
    );
  });
};

const CareersContainer = () => {
  return (
    <Wrapper>
      <Section>{getCareerCards(jobs)}</Section>
    </Wrapper>
  );
};

export default CareersContainer;
