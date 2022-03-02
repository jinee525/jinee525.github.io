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
  .desc {
    font-size: smaller;
    padding-left: 4px;
  }
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
      <Section>
        <div className="desc">*기여도가 높고 서비스에 영향을 많이 끼친 프로젝트 위주로 정리하였습니다. (정렬 순서: 작업 날짜 오름차순)</div>
        {getCareerCards(jobs)}
      </Section>
    </Wrapper>
  );
};

export default CareersContainer;
