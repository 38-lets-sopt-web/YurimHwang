// 코딩컨벤션 참고해서 Fragment 추가
import { Fragment } from 'react';
import {
  LoginPageContainer,
  LoginSection,
  LoginButton,
  SignupButton,
} from './LoginPage.style';

// any 사용
interface LoginPageProps {
  id: string;
  pw: string;
  onIdChange: (e: any) => void;
  onPwChange: (e: any) => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const LoginPage = ({
  id,
  pw,
  onIdChange,
  onPwChange,
  onLoginClick,
  onSignupClick,
}: LoginPageProps) => {
  return (
    <Fragment>
      <LoginPageContainer>
        <LoginSection>
          <header>
            <h1>SOPT MEMBERS</h1>
          </header>

          <main>
            <section>
              <label>아이디</label>
              <input
                value={id}
                onChange={onIdChange}
                placeholder="아이디를 입력해주세요."
              />
            </section>

            <section>
              <label>비밀번호</label>
              <input
                type="password"
                value={pw}
                onChange={onPwChange}
                placeholder="비밀번호를 입력해주세요."
              />
            </section>

            <LoginButton onClick={onLoginClick}>로그인</LoginButton>
            <SignupButton onClick={onSignupClick}>회원가입</SignupButton>
          </main>
        </LoginSection>
      </LoginPageContainer>
    </Fragment>
  );
};

export default LoginPage;