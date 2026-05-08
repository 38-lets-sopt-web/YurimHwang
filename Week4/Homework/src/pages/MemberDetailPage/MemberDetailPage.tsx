import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import MyPageHeader from '../MyPage/MyPageHeader';
import {
  PageContainer,
  ContentContainer,
  BackButton,
  DetailCard,
  DetailRow
} from './MemberDetailPage.style';

interface MemberDetailProps {
  id: number;
  loginId?: string;
  name: string;
  email?: string;
  age?: number;
  part: string;
}

interface MemberDetailPageProps {
  memberDetail: MemberDetailProps | null;
}

interface MyInfoProps {
  id: number;
  name: string;
  part: string;
}

const MemberDetailPage = ({ memberDetail }: MemberDetailPageProps) => {
  const navigate = useNavigate();
  const [myInfo, setMyInfo] = useState<MyInfoProps | null>(null);

  useEffect(() => {
    const fetchMyInfo = async () => {
      const storedId = localStorage.getItem('userId');

      if (storedId && storedId !== 'undefined') {
        try {
          const res = await axios.get(`https://sopt-server.p-e.kr/api/v1/user/${storedId}`);
          setMyInfo(res.data.data);
        } catch (e) {
          console.error('내 정보 불러오기 실패');
        }
      }
    };

    fetchMyInfo();
  }, []);

  return (
    <>
      <PageContainer>
        <MyPageHeader name={myInfo?.name || ''} />

        <ContentContainer>
          <h2>상세 정보</h2>

          <BackButton onClick={() => navigate('/members')}>
            뒤로가기
          </BackButton>

          {memberDetail ? (
            <DetailCard>
              <DetailRow>
                <span>이름</span>
                <span>{memberDetail.name}</span>
              </DetailRow>
              <DetailRow>
                <span>아이디</span>
                <span>{memberDetail.loginId || memberDetail.id}</span>
              </DetailRow>
              <DetailRow>
                <span>이메일</span>
                <span>{memberDetail.email}</span>
              </DetailRow>
              <DetailRow>
                <span>나이</span>
                <span>{memberDetail.age}</span>
              </DetailRow>
              <DetailRow>
                <span>파트</span>
                <span>{memberDetail.part}</span>
              </DetailRow>
            </DetailCard>
          ) : (
            <p>상세 정보를 불러올 수 없습니다.</p>
          )}
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default MemberDetailPage;