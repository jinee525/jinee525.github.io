import React from 'react';
import styled from 'styled-components';
import MyWorksContainer from './container/MyWorksContainer';
import Profile from './component/Profile';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  width: 920px;
  height: 100%;
`;
const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  margin: 20px auto;
`;
const WorkSection = styled(ProfileSection)`
  margin: 20px auto;
  height: 900px;
`;

function App() {
  return (
    <MainWrapper>
      <ProfileSection>
        <Profile />
      </ProfileSection>
      <WorkSection>
        <MyWorksContainer></MyWorksContainer>
      </WorkSection>
    </MainWrapper>
  );
}

export default App;
