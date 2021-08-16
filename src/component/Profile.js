import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

import { colorDict } from '../helpers/colors';
import ProfileImg from '../data/img/dev_yj.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 100px;
  margin: 20px;
`;

const Img = styled.img`
  max-width: 100%;
`;

const InfoWrapper = styled.div`
  margin: 20px;

  .name {
    font-size: larger;
    margin-bottom: 10px;

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
      border-radius: 8px;
      background-color: ${colorDict.lightBackground};
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  margin-right: 5px;
`;

const handleClickContactButton = (type) => {
  if (type === 'email') {
    window.location.href = 'mailto:mobiyujin@gmail.com';
  } else if (type === 'github') {
    window.open('https://github.com/jinee525');
  }
};

const Profile = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={ProfileImg} alt="profile-image" />
      </ImgWrapper>
      <InfoWrapper>
        <div className="name">
          <span>박유진</span>
          <span>Yujin Park</span>
        </div>
        <div className="info" onClick={() => handleClickContactButton('email')}>
          <IconWrapper>
            <EmailIcon />
          </IconWrapper>
          <span>mobiyujin@gmail.com</span>
        </div>
        <div className="info" onClick={() => handleClickContactButton('github')}>
          <IconWrapper>
            <GitHubIcon />
          </IconWrapper>
          <span>https://github.com/jinee525</span>
        </div>
      </InfoWrapper>
    </Wrapper>
  );
};

export default Profile;
