import React from 'react';
import { useRouter } from 'next/router';
import { CommonAppBar, CommonIconButton } from '@/components/Common';
import { CommonAppBarTitle } from './posts';

const MyPageWithdraw = () => {
  const router = useRouter();
  const onClickGoBack = () => {
    router.back();
  };
  return (
    <>
      <CommonAppBar>
        <CommonAppBar.Left>
          <CommonIconButton iconName="left" alt="이전" onClick={onClickGoBack} />
          <CommonAppBarTitle>회원탈퇴</CommonAppBarTitle>
        </CommonAppBar.Left>
      </CommonAppBar>
    </>
  );
};

export default MyPageWithdraw;
