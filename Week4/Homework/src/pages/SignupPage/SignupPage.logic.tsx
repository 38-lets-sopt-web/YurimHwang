import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import SignupPage from './SignupPage';

const API_URL = 'https://sopt-server.p-e.kr/api/v1';

interface SignupFormDataProps {
  loginId: string;
  password: string;
  passwordMore: string;
  name: string;
  email: string;
  age: string;
  part: string;
}

const SignupPageLogic = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<SignupFormDataProps>({
    loginId: '',
    password: '',
    passwordMore: '',
    name: '',
    email: '',
    age: '',
    part: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSignupClick = async () => {
    const {
      loginId,
      password,
      passwordMore,
      name,
      email,
      age,
      part,
    } = formData;

    // 항목입력 확인&비밀번호 일치검사
    if (
      !loginId ||
      !password ||
      !passwordMore ||
      !name ||
      !email ||
      !age ||
      !part
    ) {
      // 실패(미입력)->alert
      alert('회원가입 실패! 모든 항목을 빠짐없이 입력해주세요.');
      return;
    }

    if (password !== passwordMore) {
      alert('입력과 일치하지 않습니다! 다시 확인해주세요.');
      return;
    }

    try {
      await axios.post(`${API_URL}/auth/signup`, {
        loginId: loginId,
        password: password,
        name: name,
        email: email,
        age: Number(age), // 문자열이 아닌 숫자로 처리
        part: part,
      });

      localStorage.setItem('loginId', loginId);
      localStorage.setItem('userName', name);
      localStorage.setItem('userPart', part);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userAge', age);

      alert(`${name}님, 회원가입이 완료되었습니다🆒`);

      // 성공->로그인페이지로 이동
      navigate('/');
    } catch (error: any) {
      // 실패(에러간주)
      alert(error.response?.data?.message || '회원가입 과정 확인요망');
    }
  };

  const handleLoginMove = () => {
    navigate('/');
  };

  return (
    <>
      <SignupPage
        formData={formData}
        onInputChange={handleInputChange}
        onSignupClick={handleSignupClick}
        onLoginMove={handleLoginMove}
      />
    </>
  );
};

export default SignupPageLogic;