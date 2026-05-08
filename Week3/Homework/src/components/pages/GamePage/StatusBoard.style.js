import styled from "@emotion/styled";

export const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%
`;

//각 섹션 스타일
export const StatusCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(255, 182, 193, 0.2);
  
  span {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    color: ${({ color }) => color || '#888'};
  }

  b {
    font-size: 40px;
    color: #333;
  }
`;

//성공실패 섹션
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  }
`;

// 하단 안내 메시지 전용 카드
export const MessageCard = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  color: #ffb6c1;
  border: 1px
`;