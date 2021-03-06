import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import theme from '@/styles/theme';
import PersonRunning from 'public/images/person-running.png';

const ReadyForOpen = () => {
  return (
    <ReadyForOpenWrapper>
      <span>
        오픈 준비 중입니다 <Image src={PersonRunning} alt="PersonRunning" />
        <br />
      </span>
      <span>얼른 달려갈게요 !</span>
    </ReadyForOpenWrapper>
  );
};

export default ReadyForOpen;

const ReadyForOpenWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 44.4rem;
  & > span {
    display: flex;
    ${theme.fonts.h4};
    color: ${theme.colors.white};
    &:nth-of-type(2) {
      margin-left: 8px;
    }
  }
`;
