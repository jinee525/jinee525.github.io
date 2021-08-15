import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';

const FlickerItem = styled.div`
  width: 270px;
  border: 0px;
  box-shadow: none;
  overflow: visible;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius: 4px;
  padding-bottom: 17px;
`;

const CustomCard = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  justify-content: space-between;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%);
  border-radius: 4px;
  padding: 40px 20px 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  margin-right: 5px;
  align-self: flex-end;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin-top: 10px;
    font-size: larger;
    font-weight: bold;
  }
  .desc {
    margin: 6px 0px;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 200px;
`;

const Img = styled.img`
  max-width: 100%;
`;

const ProjectCard = (props) => {
  const { item: projects } = props;
  const { id, data } = projects;
  const { thumbnail, title, desc, link } = data;

  // move to each blog
  const handleClick = (link) => {
    return window.open(link);
  };

  return (
    <FlickerItem key={id} onClick={() => handleClick(link)}>
      <CustomCard>
        <ContentWrapper>
          <ImgWrapper>
            <Img src={thumbnail} alt="profile-image" />
          </ImgWrapper>
          <span className="title">{title}</span>
          <span className="desc">{desc}</span>
        </ContentWrapper>
        <IconWrapper>
          <GitHubIcon />
        </IconWrapper>
      </CustomCard>
    </FlickerItem>
  );
};

export default ProjectCard;
