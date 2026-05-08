import { useState, useEffect, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import MemberPage from './MemberPage';

const API_URL = 'https://sopt-server.p-e.kr/api/v1';

interface MemberProps {
  id: number;
  name: string;
  part: string;
  email?: string;
  age?: number;
}

const MemberPageLogic = () => {
  const navigate = useNavigate();

  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState<MemberProps | null>(null);
  const [memberList, setMemberList] = useState<MemberProps[]>([]);

  // (GET)
  useEffect(() => {
    const getMembers = async () => {
      try {
        // 포스트맨보면서수정
        const response = await axios.get(`${API_URL}/users`);

        if (response.data && response.data.data && response.data.data.users) {
          setMemberList(response.data.data.users);
        }
      } catch (e) {
        console.error('멤버들 로딩 실패..');
      }
    };

    getMembers();
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchId(e.target.value);
  };

  const handleSearchClick = async () => {
    if (!searchId) {
      alert('회원 ID를 입력해주세요.');
      return;
    }

    const searchedMember = memberList.find((member) => {
      return String(member.id) === searchId.trim();
    });

    if (searchedMember) {
      setSearchResult(searchedMember);
      return;
    }

    // 연동
    try {
      const response = await axios.get(`${API_URL}/user/${searchId}`);
      setSearchResult(response.data.data);
    } catch (e) {
      alert('해당 ID의 회원을 찾을 수 없습니다.');
      setSearchResult(null);
    }
  };

  const handleCardClick = (member: MemberProps) => {
    // (라우트)
    navigate(`/members/${member.id}`, {
      state: {
        member: member,
      },
    });
  };

  return (
    <>
      <MemberPage
        memberList={memberList}
        searchId={searchId}
        searchResult={searchResult}
        onSearchChange={handleSearchChange}
        onSearchClick={handleSearchClick}
        onCardClick={handleCardClick}
      />
    </>
  );
};

export default MemberPageLogic;