import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  display: flex;
  padding: 40px;
  gap: 40px;
  background-color: #fff0f5; 
  //반응형으로 vh
  min-height: 80vh;
  justify-content: center;
`;

export const SideBar = styled.div`
  flex: 1;
  max-width: 250px;
`;

export const GameMain = styled.div`
  flex: 2;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 15px rgba(255, 182, 193, 0.3);
`;

//상단헤더버튼 우측배치
export const GameHeader = styled.div`
  display: flex;
  justify-content: flex-end; 
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;

//액션버튼 스타일(새롭게시도)
export const ActionButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ color }) => color || '#eee'};
  
`;

//게임판 정중앙배치
export const GridWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;