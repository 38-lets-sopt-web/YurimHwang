import { useState, useEffect } from 'react';
import axios from 'axios';
import MyPageHeader from '../MyPage/MyPageHeader';
import {
  PageContainer,
  ContentContainer,
  SearchSection,
  SearchInput,
  SearchButton,
  SearchResultCard,
  ListTitle,
  MemberGrid,
  MemberCard,
  PartTag
} from './MemberPage.style';

interface MemberProps {
  id: number;
  loginId?: string;
  name: string;
  part: string;
  email?: string;
  age?: number;
}

interface MemberPageProps {
  memberList: MemberProps[];
  searchId: string;
  searchResult: MemberProps | null;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
  onCardClick: (member: MemberProps) => void;
}

const MemberPage = ({
  memberList,
  searchId,
  searchResult,
  onSearchChange,
  onSearchClick,
  onCardClick
}: MemberPageProps) => {
  const [myInfo, setMyInfo] = useState<MemberProps | null>(null);

  // 헤더에 띄울 내 이름 연동
  useEffect(() => {
    const fetchMyInfo = async () => {
      const storedId = localStorage.getItem('userId');
      const storedName = localStorage.getItem('userName');
      const storedPart = localStorage.getItem('userPart');

      if (storedName) {
        setMyInfo({
          id: Number(storedId),
          name: storedName,
          part: storedPart || '',
        });
      }

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
        {/* userName아닌 name으로 전달 */}
        <MyPageHeader name={myInfo?.name || localStorage.getItem('userName') || ''} />

        <ContentContainer>
          <h2>회원 조회</h2>

          <SearchSection>
            <label htmlFor="memberId">회원 ID</label>
            <SearchInput
              id="memberId"
              type="number"
              value={searchId}
              onChange={onSearchChange}
              placeholder="ID를 입력하세요."
            />

            <SearchButton onClick={onSearchClick} disabled={!searchId}>
              검색
            </SearchButton>
          </SearchSection>

          {searchResult && (
            <SearchResultCard>
              <h3>검색 결과</h3>

              <section className="info-row">
                <span>아이디</span>
                <span>{searchResult.loginId || searchResult.id}</span>
              </section>

              <section className="info-row">
                <span>이름</span>
                <span>{searchResult.name}</span>
              </section>

              <section className="info-row">
                <span>이메일</span>
                <span>{searchResult.email}</span>
              </section>

              <section className="info-row">
                <span>나이</span>
                <span>{searchResult.age}</span>
              </section>

              <section className="info-row">
                <span>파트</span>
                <span>{searchResult.part}</span>
              </section>
            </SearchResultCard>
          )}

          {/* 회원리스트 화면에 */}
          <ListTitle>전체 멤버 리스트</ListTitle>
          <MemberGrid>
            {memberList.map((member) => (
              <MemberCard key={member.id} onClick={() => onCardClick(member)}>
                <h4>{member.name}</h4>
                <PartTag>{member.part}</PartTag>
              </MemberCard>
            ))}
          </MemberGrid>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default MemberPage;