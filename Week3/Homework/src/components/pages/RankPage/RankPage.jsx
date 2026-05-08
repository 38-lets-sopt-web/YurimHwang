import React, { useState, useEffect } from 'react';
import {
  RankWrapper,
  RankHeader,
  ResetButton,
  RankTable,
  TableHeader,
  TableRow
} from './RankPage.style';

function RankPage() {
  const [ranks, setRanks] = useState([]);

  //localStorage에서 데이터 가져오기
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('rank')) || [];
    //점수(내림차순)
    const sortedData = savedData.sort((a, b) => b.score - a.score);
    setRanks(sortedData);
  }, []);

  //초기화버튼
  const handleReset = () => {
    if (window.confirm("정말 모든 기록.. 지울 용기있어요?")) {
      localStorage.removeItem('rank');
      setRanks([]);
    }
  };

  return (
    <RankWrapper>
      <RankHeader>
        <h3>랭킹 보드</h3>
        <ResetButton onClick={handleReset}>기록 초기화</ResetButton>
      </RankHeader>

      <RankTable>
        <thead>
          <TableHeader>
            <th>순위</th>
            <th>레벨</th>
            <th>점수</th>
            <th>기록 시각</th>
          </TableHeader>
        </thead>
        <tbody>
          {ranks.length > 0 ? (
            ranks.map((item, index) => (
              <TableRow key={item.id}>
                <td>{index + 1}</td>
                <td>{item.level}</td>
                <td>{item.score}점</td>
                <td>{item.date}</td>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <td colSpan="4" style={{ padding: '40px' }}>아직 기록이 없어요.. 지금 당장 두더지를 잡아보세요Yo</td>
            </TableRow>
          )}
        </tbody>
      </RankTable>
    </RankWrapper>
  );
}

export default RankPage;