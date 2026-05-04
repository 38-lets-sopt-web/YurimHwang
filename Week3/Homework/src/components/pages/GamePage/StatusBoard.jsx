import React from 'react';
import {
  InfoPanel,
  StatusCard,
  GridContainer,
  MessageCard
} from './StatusBoard.style';

function StatusBoard({ timeLeft, score, successCount, failCount }) {
  return (
    <InfoPanel>
      {/*남은시간섹션*/}
      <StatusCard>
        <span>남은 시간</span>
        {/*볼드체로*/}
        <b>{timeLeft}</b>
      </StatusCard>

      {/*점수섹션*/}
      <StatusCard>
        <span>총 점수</span>
        <b>{score}</b>
      </StatusCard>

      {/*성공실패 나누는 섹션*/}
      <GridContainer>
        <StatusCard color="#4caf50">
          <span>성공</span>
          <b>{successCount}</b>
        </StatusCard>
        <StatusCard color="#f44336">
          <span>실패</span>
          <b>{failCount}</b>
        </StatusCard>
      </GridContainer>

      {/*안내메시지 섹션*/}
      <MessageCard>
        {score >= 10 ? "Wow,당신이 바로 이 구역의 사냥꾼!" : "두더지를 잡아보세Yo"}
      </MessageCard>
    </InfoPanel>
  );
}

export default StatusBoard;