import React from 'react';
import { useEffect } from 'react';
import authService from '../../../../service/apis/authService';
import { useRouter } from 'next/router';
import { ROUTES } from '../../../../shared/constants/routes';

const KakaoAuth = () => {
  const router = useRouter();

  const login = async (kakaoCode: string) => {
    await authService.getAuth(kakaoCode);

    router.push(ROUTES.HOME);
  };

  useEffect(() => {
    const kakaoCode = new URL(window.location.href).searchParams.get('code');
    if (kakaoCode) {
      login(kakaoCode);
    }
  }, []);

  return <div>hello</div>;
};

export default KakaoAuth;