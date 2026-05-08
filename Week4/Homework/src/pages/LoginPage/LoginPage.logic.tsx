import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import LoginPage from './LoginPage';

const API_URL = 'https://sopt-server.p-e.kr/api/v1';

const LoginPageLogic = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleLoginSubmitClick = async () => {
    if (!id || !pw) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/auth/signin`, {
        loginId: id,   // 아이디 키값확인 항시필수
        password: pw,
      });

      const loginUserId =
        response.data.data?.id ||
        response.data.data?.userId ||
        response.data.data;

      localStorage.setItem('userId', String(loginUserId)); // userId 저장
      localStorage.setItem('loginId', id); // loginId저장

      alert(`${id}님 환영합니다🆒`);
      navigate('/mypage');
    } catch (error: any) {
      alert(error.response?.data?.message || '로그인에 실패하였습니다. ReTry하세요.');
    }
  };

  const handleSignupMoveClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <LoginPage
        id={id}
        pw={pw}
        onIdChange={handleIdChange}
        onPwChange={handlePwChange}
        onLoginClick={handleLoginSubmitClick}
        onSignupClick={handleSignupMoveClick}
      />
    </>
  );
};

export default LoginPageLogic;