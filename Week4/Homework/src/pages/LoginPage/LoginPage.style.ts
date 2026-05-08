import styled from 'styled-components';

export const LoginPageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  /* 반응형웹구현 */
  height: 100vh;
  
  background-color: ${(props: any) => props.theme.colors.background};
`;

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 400px;
  padding: 40px;
  
  background-color: ${(props: any) => props.theme.colors.white};
  border-radius: 20px;

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-size: 14px;
      font-weight: bold;
      color: ${(props: any) => props.theme.colors.text};
    }

    input {
      padding: 12px;
      border: 1px solid ${(props: any) => props.theme.colors.gray};
      border-radius: 8px;
      outline: none;

      &:focus {
        border: 1px solid ${(props: any) => props.theme.colors.main};
      }
    }
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 14px;
  
  background-color: ${(props: any) => props.theme.colors.main};
  color: white;
  border: none;
  border-radius: 10px;
  
  font-weight: bold;
  cursor: pointer;

  /* 합세위한 CSS 속성순서준수(Display->Box Model등으로) */
  &:hover {
    background-color: ${(props: any) => props.theme.colors.mainHover};
  }
`;

export const SignupButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background: none;
  border: none;
  color: #888;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: ${(props: any) => props.theme.colors.main};
    text-decoration: underline;
  }
`;