// 공통헤더
import { useNavigate } from 'react-router';
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  NavTab
} from './MyPage.style';

interface MyPageHeaderProps {
  name: string;
}

const MyPageHeader = ({ name }: MyPageHeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('loginId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userPart');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userAge');

    alert('로그아웃 되었습니다!');
    navigate('/'); // 로그인페이지로다시이동
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <h1>SOPT MEMBERS</h1>
        <p>안녕하세요, 🆒{name}님</p>
      </HeaderLeft>

      {/* 각Tab */}
      <HeaderRight>
        {/* 클릭이동(라우트) */}
        <NavTab onClick={() => navigate('/mypage')}>내 정보</NavTab>
        <NavTab onClick={() => navigate('/members')}>회원 조회</NavTab>
        <NavTab onClick={handleLogout}>로그아웃</NavTab>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default MyPageHeader;