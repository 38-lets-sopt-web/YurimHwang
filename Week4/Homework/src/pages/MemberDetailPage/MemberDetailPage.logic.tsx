import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import axios from 'axios';
import MemberDetailPage from './MemberDetailPage';

const API_URL = 'https://sopt-server.p-e.kr/api/v1';

interface MemberDetailProps {
  id: number;
  loginId?: string;
  name: string;
  email?: string;
  age?: number;
  part: string;
}

interface LocationStateProps {
  member?: MemberDetailProps;
}

const MemberDetailPageLogic = () => {
  const { id } = useParams();
  const location = useLocation();

  const state = location.state as LocationStateProps;
  const memberFromCard = state?.member;

  const [memberDetail, setMemberDetail] = useState<MemberDetailProps | null>(
    memberFromCard || null
  );

  // (GET)
  useEffect(() => {
    const getMemberDetail = async () => {
      if (memberFromCard) {
        setMemberDetail(memberFromCard);
        return;
      }

      try {
        const response = await axios.get(`${API_URL}/user/${id}`);
        setMemberDetail(response.data.data);
      } catch (e) {
        setMemberDetail(null);
      }
    };

    if (id) {
      getMemberDetail();
    }
  }, [id, memberFromCard]);

  return (
    <>
      <MemberDetailPage memberDetail={memberDetail} />
    </>
  );
};

export default MemberDetailPageLogic;