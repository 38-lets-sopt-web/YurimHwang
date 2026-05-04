import styled from '@emotion/styled';

const basic = '#ffc9c9ff'; //기본 구멍색상
const hitRed = '#ffcccb';  //hit시 붉어지게

export const Hole = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%; /*동그란 구멍모양*/
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px; /*이모지 크기*/
  cursor: pointer;
  transition: all 0.2s;

  /*공격받는 이미지처럼*/
  background-color: ${({ status }) => (status === 'hit' ? hitRed : basic)};
  /*살짝커지게*/
  &:hover {
    transform: scale(1.05);
  }
  /*쏙들어가게효과*/
  &:active {
    transform: scale(0.95);
  }
`;