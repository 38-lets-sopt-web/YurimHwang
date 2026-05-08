import { useState, useEffect, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import MyInfoPage from '../MyInfoPage/MyInfoPage'; // 본인정보수정

const API_URL = 'https://sopt-server.p-e.kr/api/v1';

interface UserInfoProps {
  loginId: string;
  part: string;
  name: string;
  email: string;
  age: string | number;
}

interface UserResponseDataProps {
  data: {
    id?: number;
    loginId?: string;
    part?: string;
    name?: string;
    email?: string;
    age?: number;
  };
}

const MyPageLogic = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserInfoProps>({
    loginId: '',
    part: '',
    name: '',
    email: '',
    age: '',
  });

  const [headerName, setHeaderName] = useState('');

  // 서버정보요청
  useEffect(() => {
    const getUserData = async () => {
      const storedUserId = localStorage.getItem('userId');
      const storedLoginId = localStorage.getItem('loginId');
      const storedName = localStorage.getItem('userName');
      const storedPart = localStorage.getItem('userPart');
      const storedEmail = localStorage.getItem('userEmail');
      const storedAge = localStorage.getItem('userAge');

      if (!storedUserId || storedUserId === 'undefined') {
        localStorage.removeItem('userId');
        alert('로그인 정보가 없습니다. 다시 로그인해주세요.');
        navigate('/');
        return;
      }

      try {
        const response = await axios.get<UserResponseDataProps>(`${API_URL}/user/${storedUserId}`);
        const result = response.data.data; // 서버데이터

        const initialData = {
          loginId: result.loginId || storedLoginId || String(result.id || ''),
          part: result.part || storedPart || '',
          name: result.name || storedName || '',
          email: result.email || storedEmail || '',
          age: result.age || storedAge || '',
        };

        setUserInfo(initialData);
        setHeaderName(initialData.name);
        // 오류 콘솔로
      } catch (error) {
        console.error('데이터 로딩 실패:', error);
        console.log('현재 저장된 userId:', storedUserId);

        const fallbackData = {
          loginId: storedLoginId || storedUserId,
          part: storedPart || '',
          name: storedName || storedLoginId || '',
          email: storedEmail || '',
          age: storedAge || '',
        };

        setUserInfo(fallbackData);
        setHeaderName(fallbackData.name);
      }
    };

    getUserData();
  }, [navigate]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleUpdate = async () => {
    if (!userInfo.name || !userInfo.email || !userInfo.age) {
      alert('이름, 이메일, 나이를 모두 입력해주세요.');
      return;
    }

    localStorage.setItem('userName', userInfo.name);
    localStorage.setItem('userPart', userInfo.part);
    localStorage.setItem('userEmail', String(userInfo.email));
    localStorage.setItem('userAge', String(userInfo.age));

    alert(`${userInfo.name}님의 정보가 수정되었습니다!🆒`);
    setHeaderName(userInfo.name);
  };

  return (
    <>
      <MyInfoPage
        userInfo={userInfo}
        headerName={headerName}
        onInputChange={handleInputChange}
        onUpdate={handleUpdate}
      />
    </>
  );
};

export default MyPageLogic;