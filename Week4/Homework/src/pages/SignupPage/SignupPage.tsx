import { Fragment } from 'react';
import {
  SignupPageContainer,
  SignupSection,
  InputContainer,
  SignupButton,
  LoginLinkButton
} from './SignupPage.style';

interface SignupPageProps {
  formData: any;
  onInputChange: (e: any) => void;
  onSignupClick: () => void;
  onLoginMove: () => void;
}

const SignupPage = ({ formData, onInputChange, onSignupClick, onLoginMove }: SignupPageProps) => {
  return (
    <Fragment>
      <SignupPageContainer>
        <SignupSection>
          <header>
            <h1>회원가입</h1>
          </header>

          <main>
            {/* 구현명세: 아이디,비밀번호,비밀번호확인,이름,이메일,나이,파트 */}
            <InputContainer>
              <label>아이디</label>
              <input id="loginId" value={formData.loginId} onChange={onInputChange} placeholder="사용할 아이디를 입력해주세요." />
            </InputContainer>

            <InputContainer>
              <label>비밀번호</label>
              <input id="password" type="password" value={formData.password} onChange={onInputChange} placeholder="비밀번호를 입력해주세요." />
            </InputContainer>

            <InputContainer>
              <label>비밀번호 확인</label>
              <input id="passwordMore" type="password" value={formData.passwordMore} onChange={onInputChange} placeholder="비밀번호를 한 번 더 입력해주세요." />
            </InputContainer>

            <InputContainer>
              <label>이름</label>
              <input id="name" value={formData.name} onChange={onInputChange} placeholder="이름을 입력해주세요." />
            </InputContainer>

            <InputContainer>
              <label>이메일</label>
              <input id="email" type="email" value={formData.email} onChange={onInputChange} placeholder="이메일을 입력해주세요." />
            </InputContainer>

            <InputContainer>
              <label>나이</label>
              <input id="age" type="number" value={formData.age} onChange={onInputChange} placeholder="나이를 입력해주세요." />
            </InputContainer>

            <InputContainer>
              <label>파트</label>
              <input id="part" value={formData.part} onChange={onInputChange} placeholder="파트명를 입력해주세요." />
            </InputContainer>

            <SignupButton type="button" onClick={onSignupClick}>회원가입</SignupButton>

            <LoginLinkButton onClick={onLoginMove}>
              이미 계정이 있나요? <span>로그인으로 돌아가기</span>
            </LoginLinkButton>
          </main>
        </SignupSection>
      </SignupPageContainer>
    </Fragment>
  );
};

export default SignupPage;