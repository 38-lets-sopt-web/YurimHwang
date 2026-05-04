import React, { useState } from 'react';
import Header from './components/common/Header/Header';
import GamePage from './components/pages/GamePage/GamePage';
import RankPage from './components/pages/RankPage/RankPage';

function App() {
  //App의 초기값 설정
  const [currentTab, setCurrentTab] = useState('game');

  return (
    <div className="App">
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>
        {currentTab === 'game' ? (
          <GamePage />
        ) : (
          <RankPage />
        )}
      </main>
    </div>
  );
}
export default App;