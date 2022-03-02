import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid } from '@material-ui/core';

import { colorDict } from '../helpers/colors';
import ProfileImg from '../data/img/개발자프로필.JPEG';
import { skills, introduce } from '../data/infos';

const Chip = styled.div`
  width: auto;
  height: auto;
  padding: 6px 12px;
  margin: 0px 8px;
  border-radius: 4px;
  border: solid 1px ${colorDict.darkText};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DescSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 200px;
  margin: 20px;
  border-radius: 4px;

`;

const Img = styled.img`
  max-width: 100%;
`;

const InfoWrapper = styled.div`
  margin: 20px auto 40px;
  .name {
    font-size: larger;
    margin-bottom: 30px;
    text-align: center;

    span:first-child {
      margin-right: 10px;
    }
    span:last-child {
      font-weight: bold;
    }
  }
  .info {
    display: flex;
    padding: 4px 6px;

    &:hover {
      cursor: pointer;
      border-radius: 4px;
      background-color: ${colorDict.lightBackground};
    }
  }
`;

const SkillWrapper = styled.div`
  .title {
    font-size: larger;
    font-weight: bold;
  }
  .flexContainer {
    width: 100%;
    margin: 5px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text{
    margin: 5px 0px 0px 8px;
    white-space: pre-wrap;
    word-break: keep-all;
  }
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  margin-right: 5px;
`;

const getSkills = (skills) => {
  return skills.map((item, index) => {
    return <Chip key={index}>{item}</Chip>;
  });
};

const Profile = () => {
  return (
    <Wrapper>
      <ProfileSection>
        <ImgWrapper>
          <Img src={ProfileImg} alt="profile-image" />
        </ImgWrapper>
        <InfoWrapper>
          <div className="name">
            <span>박유진</span>
            <span>Yujin Park</span>
          </div>
          <div className="info" onClick={() => window.location.href = 'mailto:mobiyujin@gmail.com'}>
            <IconWrapper>
              <EmailIcon />
            </IconWrapper>
            <span>mobiyujin@gmail.com</span>
          </div>
          <div className="info" onClick={() => window.open('https://www.linkedin.com/in/dev-yujin/')}>
            <IconWrapper>
              <LinkedInIcon />
            </IconWrapper>
            <span>https://www.linkedin.com/in/dev-yujin/</span>
          </div>
          <div className="info" onClick={() => window.open('https://github.com/jinee525')}>
            <IconWrapper>
              <GitHubIcon />
            </IconWrapper>
            <span>https://github.com/jinee525</span>
          </div>
        </InfoWrapper>
      </ProfileSection>
      <DescSection>
        <SkillWrapper>
          <span className="title">main-skills</span>
          <div className="flexContainer">
            <Grid container>{getSkills(skills.main)}</Grid>
          </div>
        </SkillWrapper>
        <SkillWrapper>
          <span className="title">sub-skills</span>
          <div className="flexContainer">
            <Grid container>{getSkills(skills.sub)}</Grid>
          </div>
        </SkillWrapper>
        <SkillWrapper>
          <span className="title">introduce</span>
          <p className="text">{introduce}</p>
        </SkillWrapper>
      </DescSection>
    </Wrapper >
  );
};

export default Profile;
