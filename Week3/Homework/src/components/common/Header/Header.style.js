import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  background-color: #fff0f5; 
  margin-bottom: 20px;
  border-radius: 15px;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  background-color: #ffe4e1; /*tab바 배경*/
  padding: 5px;
  border-radius: 20px;
`;

//일일이 색상입력이 불필요하다고 느껴 시험삼아
//입력값 변경이 일어나지않게 const활용
//리액트가 더 익숙해지면 2주차 과제와 같이 
// variables파일을 따로 만들어볼 예정
const pointPink = '#ffb6c1';
const hoverPink = '#fff5f7';

export const TabButton = styled.button`
  padding: 5px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;

  /* 현재tab인지/아닌지에 따라 색상변경(괄호잊지말것) */
  background-color: ${({ active }) => (active ? pointPink : 'transparent')};
  color: ${({ active }) => (active ? 'white' : pointPink)};

  &:hover {
    background-color: ${({ active }) => (active ? pointPink : hoverPink)};
  }
`;