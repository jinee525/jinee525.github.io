import React from 'react';
import styled from 'styled-components';
import MyWorksContainer from './container/MyWorksContainer';
import Profile from './component/Profile';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  width: 920px;
  height: 100%;
  letter-spacing: 0.02em;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

function App() {
  return (
    <Wrapper>
      <Section>
        <Profile />
      </Section>
      <Section>
        <MyWorksContainer />
      </Section>
    </Wrapper>
  );
}

export default App;
