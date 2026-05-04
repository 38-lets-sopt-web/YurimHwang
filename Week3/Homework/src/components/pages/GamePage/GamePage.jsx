import React, { useState, useEffect } from 'react';
import StatusBoard from './StatusBoard';
import MoleGrid from './MoleGrid';
import {
  PageWrapper,
  SideBar,
  GameMain,
  GameHeader,
  ButtonGroup,
  ActionButton,
  GridWrapper
} from './GamePage.style';

function GamePage() {
  //게임상태관리: 남은 시간,총 점수,성공/실패 초기화
  const [timeLeft, setTimeLeft] = useState(15.0); //기본제한시간15초
  const [score, setScore] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [moles, setMoles] = useState(Array(4).fill('empty'));
  const [isActive, setIsActive] = useState(false); //게임진행여부

  //타이머 로직
  useEffect(() => {
    let timer;
    if (isActive === true) {
      if (timeLeft > 0) {
        //반복 타이머 시작
        timer = setInterval(() => {
          let nextTime = timeLeft - 0.1; //01씩 계산
          if (nextTime < 0) {
            nextTime = 0;
          }
          setTimeLeft(nextTime); //업데이트
        }, 100); //반복주기 0.1초
      } else {
        // 시간 다 되면,게임종료
        setIsActive(false);
        alert(`최종 점수: ${score}`);

        //성공결과만 저장 (score>0일때 조건추가)
        if (score > 0) {
          const newRecord = {
            id: Date.now(), //고유id
            level: "초보사냥꾼:레벨측정불가",
            score: score,
            date: new Date().toLocaleString(),
          };

          //기록합치기
          const savedRank = JSON.parse(localStorage.getItem('rank')) || [];
          const updatedRank = [...savedRank, newRecord];

          localStorage.setItem('rank', JSON.stringify(updatedRank));
        }
      }
    }

    //반복 타이머 종료
    return () => clearInterval(timer);
  }, [isActive, timeLeft, score]);

  //두더지&폭탄 랜덤로직
  useEffect(() => {
    let moleTimer;
    if (isActive === true) {
      moleTimer = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * 4);//4칸중랜덤
        let randomValue = Math.random();
        let type = 'mole';

        if (randomValue < 0.2) {
          type = 'bomb'; //20% 폭탄
        } else {
          type = 'mole'; //80% 두더지
        }

        let newMoles = [...moles];
        //구멍이 비었을때만 나타나게하기
        if (newMoles[randomIndex] === 'empty') {
          newMoles[randomIndex] = type;
          setMoles(newMoles);

          //1초간격으로 빈 구멍제작
          setTimeout(() => {
            setMoles((currentMoles) => {
              let updatedMoles = [...currentMoles];
              if (updatedMoles[randomIndex] !== 'hit') {
                updatedMoles[randomIndex] = 'empty';
              }
              return updatedMoles;
            });
          }, 1000);
        }
      }, 400);//0.4초마다 체크// 더 빠르게 진행시키고싶다면 이곳수정
    }
    return () => clearInterval(moleTimer);
  }, [isActive, moles]);

  //버튼클릭
  const startGame = () => {
    setTimeLeft(15.0);
    setScore(0);
    setSuccessCount(0);
    setFailCount(0);
    setMoles(Array(4).fill('empty'));
    setIsActive(true);
  };

  //중단버트 클릭하면(게임을 멈추도록)
  const stopGame = () => {
    if (isActive === true) {
      setIsActive(false);
      alert("게임중단..Re..");
    }
  };

  const targetClick = (index, status) => {
    //게임종료,빈구멍,이미 타격입은곳 무시
    if (isActive === false) return;
    if (status === 'empty') return;
    if (status === 'hit') return;

    //두더지클릭 시
    if (status === 'mole') {
      const nextScore = score + 1; //+1점
      const nextSuccess = successCount + 1; //+1(성공카운트)

      setScore(nextScore); //업데이트
      setSuccessCount(nextSuccess);

      //핵심로직(두더지)
      let hitMoles = [...moles];
      hitMoles[index] = 'hit';
      setMoles(hitMoles);

      setTimeout(() => {
        setMoles((currentMoles) => {
          let backToEmpty = [...currentMoles];
          backToEmpty[index] = 'empty';
          return backToEmpty;
        });
      }, 700);
    }

    //폭탄클릭 시
    if (status === 'bomb') {
      const nextScore = score - 1; //-1점
      const nextFail = failCount + 1; //-1(실패카운트)

      setScore(nextScore);
      setFailCount(nextFail);

      //폭탄클릭시, 바로 구멍으로 들어가도록
      let bombClickMoles = [...moles];
      bombClickMoles[index] = 'empty';
      //폭탄 사라지게
      setMoles(bombClickMoles);
    }
  };

  return (
    //페이지구조
    <PageWrapper>
      <SideBar>
        {/*정보판*/}
        <StatusBoard
          timeLeft={timeLeft.toFixed(1)}
          score={score}
          successCount={successCount}
          failCount={failCount}
        />
      </SideBar>

      <GameMain>
        <GameHeader>
          <ButtonGroup>
            <ActionButton color="#4caf50" onClick={startGame}>
              시작
            </ActionButton>
            <ActionButton color="#ffb6c1" onClick={stopGame}>
              중단
            </ActionButton>
          </ButtonGroup>
        </GameHeader>

        {/*두더지그리드 화면채우도록*/}
        <GridWrapper>
          <MoleGrid moles={moles} onMoleClick={targetClick} />
        </GridWrapper>
      </GameMain>
    </PageWrapper>
  );
}

export default GamePage;