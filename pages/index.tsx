import React, { useState } from 'react';
import HomeBanner from '@/components/Home/Banner';
import HomeTabHeader from '@/components/Home/TabHeader';
import HomeTabs, { CurrentTabType } from '@/components/Home/Tabs';
import Example from '@/components/Example/Example';
import { HOME_TAB_TYPE } from '@/shared/constants/home';
import styled from 'styled-components';

const Home = () => {
  const [currentTab, setCurrentTab] = useState<CurrentTabType>(
    HOME_TAB_TYPE.FOLDER,
  );

  return (
    <>
      <Example />
      <HomeBanner nickname="홍길동" />
      <HomeTabHeader currentTab={currentTab} />
      <HomeTabs
        currentTab={currentTab}
        setCurrentTab={(tab: CurrentTabType) => setCurrentTab(tab)}
        onClick={() => console.log('폴더 추가')}
      />
      <Contents />
    </>
  );
};

const Contents = styled.div`
  height: 1500px;
`;

if (process.env.NODE_ENV === 'development') {
  if (typeof window === 'undefined') {
    (async () => {
      const { server } = await import('@/mocks/server');
      server.listen();
    })();
  } else {
    (async () => {
      const { worker } = await import('@/mocks/browser');
      worker.start();
    })();
  }
}

export default Home;
