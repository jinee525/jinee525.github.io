import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import PageviewIcon from '@material-ui/icons/Pageview';

import { colorDict } from '../helpers/colors';

const CustomCard = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: #7f9eb21a;
  &:not(:first-child){
    margin-top:20px;
  }
  &:hover {
    cursor: pointer;
    background-color: ${colorDict.lightBackground};
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  .title {
    margin-top: 10px 0 0 0;
    font-size: larger;
    font-weight: bold;
  }
  .desc {
    margin: 10px 0 0 0;
    width: 580px;
  }
  .link{
    text-align: end;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 200px;
  align-self: center;
  width: 250px;
`;

const Img = styled.img`
  width: 200px;
  margin: 0px 25px;
`;

const ProjectCard = (props) => {
  const { item: projects } = props;
  const { id, data } = projects;
  const { thumbnail, title, desc, techInfo, role, link, type } = data;

  // move to each blog
  const handleClick = (link) => {
    return window.open(link);
  };

  return (
    <CustomCard key={id} onClick={() => handleClick(link)}>
      <ImgWrapper>
        <Img src={thumbnail} alt="profile-image" />
      </ImgWrapper>
      <ContentWrapper>
        <span className="title">{title}</span>
        <span className="desc">{desc}</span>
        <span className="desc">사용 기술: {techInfo}</span>
        <span className="desc">{role ? `맡은 역할: ${role}` : `프로젝트 유형: ${type}`}</span>
        <span className="link">{techInfo === 'AdobeXD' ? <PageviewIcon /> : <GitHubIcon />}</span>
      </ContentWrapper>
    </CustomCard >
  );
};

export default ProjectCard;
