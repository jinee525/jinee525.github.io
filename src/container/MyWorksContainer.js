import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import MyWorksTabs from './MyWorksTabs';
import MyWorksTabContents from './MyWorksTabContents';
import AcademicAchievement from '../component/AcademicAchievement';
import Careers from '../component/Careers';

const MyWorksContainer = () => {
  const TabEl = useRef();
  const [currentTabValue, setCurrentTabValue] = useState(0);

  return (
    <div>
      <div ref={TabEl} style={{ width: '100%', position: 'sticky', top: 60, zIndex: 999 }}>
        <MyWorksTabs currentTabValue={currentTabValue} handleTabValue={setCurrentTabValue} />
      </div>
      <MyWorksTabContents value={currentTabValue} index={0}>
        <AcademicAchievement></AcademicAchievement>
      </MyWorksTabContents>
      <MyWorksTabContents value={currentTabValue} index={1}>
        <Careers></Careers>
      </MyWorksTabContents>
    </div>
  );
};

export default MyWorksContainer;
