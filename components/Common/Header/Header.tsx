import React from 'react';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { dropdownStateAtom } from '@/store/dropdown/atom';
import { HeaderWrapper, Title, TitleWrapper } from './Header.styles';
import MagnifyingGlassIcon from 'public/svgs/magnifyingglass.svg';
import LeftIcon from 'public/svgs/left.svg';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const setDropdownState = useSetRecoilState<boolean>(dropdownStateAtom);

  const handleButtonClick = () => {
    router.push('/search');
  };

  const handleLogoClick = () => {
    setDropdownState(true);
  };

  // TODO: main header 이후 다른 페이지 헤더 작업 예정
  const MainHeader = () => (
    <>
      <TitleWrapper onClick={handleLogoClick}>
        <Title>서비스명</Title>
        <Image src={LeftIcon} alt="메뉴" width={16} height={16} />
      </TitleWrapper>
      <button onClick={handleButtonClick}>
        <Image src={MagnifyingGlassIcon} alt="검색" width={24} height={24} />
      </button>
    </>
  );

  return (
    <>
      <HeaderWrapper>
        <MainHeader />
      </HeaderWrapper>
    </>
  );
};

export default Header;