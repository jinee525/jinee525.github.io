import React, { useState, useRef } from 'react';

import MyWorksTabs from './MyWorksTabs';
import MyWorksTabContents from './MyWorksTabContents';
import Education from './Academic/Education';
import CareersContainer from './Career/CareersContainer';

const MyWorksContainer = () => {
  const Tab = useRef();
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div>
      <div ref={Tab} style={{ width: '100%', position: 'sticky', top: 0, zIndex: 999 }}>
        <MyWorksTabs currentTabIndex={currentTabIndex} handleTabIndex={setCurrentTabIndex} />
      </div>
      <MyWorksTabContents value={currentTabIndex} index={0}>
        <Education></Education>
      </MyWorksTabContents>
      <MyWorksTabContents value={currentTabIndex} index={1}>
        <CareersContainer></CareersContainer>
      </MyWorksTabContents>
    </div>
  );
};

export default MyWorksContainer;
