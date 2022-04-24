import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import theme from '@/styles/theme';
import FolderIcon from '@/assets/icons/folderplus.svg';
import { HOME_TAB_TYPE, HOME_TAB_LABEL } from '@/shared/constants/home';

export type CurrentTabType = typeof HOME_TAB_TYPE[keyof typeof HOME_TAB_TYPE];

interface Tab {
  key: CurrentTabType;
  label: typeof HOME_TAB_LABEL[keyof typeof HOME_TAB_LABEL];
}

export interface TabsProps {
  currentTab: CurrentTabType;
  setCurrentTab: (tab: CurrentTabType) => void;
  onClick: () => void;
}

const Tabs = ({
  currentTab,
  setCurrentTab,
  onClick,
}: TabsProps): React.ReactElement => {
  const tabList = [
    {
      key: HOME_TAB_TYPE.FOLDER,
      label: HOME_TAB_LABEL.FOLDER,
    },
    {
      key: HOME_TAB_TYPE.EMOTION,
      label: HOME_TAB_LABEL.EMOTION,
    },
  ];

  const FolderPlus = () => {
    return (
      <FolderImage onClick={onClick}>
        <Image src={FolderIcon} alt="폴더 추가" />
      </FolderImage>
    );
  };

  return (
    <TabContainer>
      <TabList>
        {tabList.map((tab: Tab) => {
          return (
            <TabButton
              key={tab.key}
              activate={currentTab === tab.key}
              onClick={() => setCurrentTab(tab.key)}
            >
              {tab.label}
            </TabButton>
          );
        })}
        {currentTab === HOME_TAB_TYPE.FOLDER && <FolderPlus />}
      </TabList>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  position: sticky;
  // TODO: Header 높이에 맞춰서 top 위치 변경
  top: 0;
`;

const TabList = styled.div`
  display: flex;
  padding: 0 18px;
  margin-right: -18px;
  margin-left: -18px;
  background-color: ${theme.colors.black};
`;

const FolderImage = styled.button`
  justify-self: flex-end;
  margin-left: auto;
`;

const TabButton = styled.button<{ activate: boolean }>`
  padding: 11px 0;
  ${theme.fonts.h4};
  color: ${(props) =>
    props.activate ? theme.colors.white : theme.colors.gray4};
  border-bottom: ${(props) =>
    props.activate &&
    css`
    1px solid ${theme.colors.primary}
  `};

  & ~ & {
    margin-left: 16px;
  }
`;

export default Tabs;