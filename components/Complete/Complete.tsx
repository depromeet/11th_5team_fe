import React, { useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import CompleteImage from 'public/images/complete.png';
import theme from '@/styles/theme';
import { useResetRecoilState } from 'recoil';
import { postRequestState } from '@/store/postResponse/atom';
import { useRouter } from 'next/router';

type RandomTextProps = { [x: number]: React.ReactElement | string };

const randomText: RandomTextProps = {
  0: (
    <>
      부정적인 생각들은 <br />
      서비스명이 처리했으니 안심하라구~
    </>
  ),
  1: (
    <>
      생각이 정리된 후 <br />
      다시 감정을 선택할 수 있어요.
    </>
  ),
  2: (
    <>
      생각 정리에 도움이 됐나요? <br /> 스스로에게 듬~뿍 칭찬해주세요!
    </>
  ),
  3: (
    <>
      한결 나아졌어요 👍🏻 <br /> 서비스명아 고마워!
    </>
  ),
  4: '기록된 감정은 홈화면에서 확인할 수 있어요.',
};

const Complete = () => {
  const resetPostRequest = useResetRecoilState(postRequestState);
  const router = useRouter();

  const pickRandomText = () => {
    const randomNumberZeroToFive = Math.floor(Math.random() * 5);
    return randomText[randomNumberZeroToFive];
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      //TODO : 내가쓴 글로 이동
      router.push('/');
    }, 3000);
    return () => {
      clearTimeout(timer);
      resetPostRequest();
    };
  }, [resetPostRequest, router]);
  return (
    <>
      <ImageWrap>
        <Image
          src={CompleteImage}
          alt="CompleteImage"
          width={232}
          height={209}
        />
      </ImageWrap>
      <Title>감정이 기록됐어요!</Title>
      <Description>{pickRandomText()}</Description>
    </>
  );
};

export default Complete;

const ImageWrap = styled.div`
  margin: 95px 0 40px;
  text-align: center;
`;

const Title = styled.div`
  ${theme.fonts.h2}
  line-height: 24px;
  text-align: center;
  color: ${theme.colors.white};
  margin-bottom: 12px;
`;
const Description = styled.div`
  ${theme.fonts.body};
  text-align: center;
  color: ${theme.colors.gray5};
`;
