import React from 'react';
import { HeaderContainer, Title, Nav, TabButton } from './Header.style';

//구조 분해 할당
function Header({ currentTab, setCurrentTab }) {
  return (
    <HeaderContainer>
      <Title>두더지 Game</Title>
      <Nav>
        {/*버튼클릭시, setCurrentTab으로 페이지를 변경*/}
        <TabButton
          active={currentTab === 'game'}
          onClick={() => {
            if (currentTab !== 'game') {
              setCurrentTab('game');
            }
          }}
        >
          게임
        </TabButton>

        <TabButton
          active={currentTab === 'rank'}
          onClick={() => {
            if (currentTab !== 'rank') {
              setCurrentTab('rank');
            }
          }}
        >
          랭킹
        </TabButton>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;