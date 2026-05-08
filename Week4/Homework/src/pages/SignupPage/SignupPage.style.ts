import styled from 'styled-components';

export const SignupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props: any) => props.theme.colors.background};
`;

export const SignupSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 40px;

  header {
    margin-bottom: 40px;
    text-align: center;

    h1 {
      color: ${(props: any) => props.theme.colors.main};
      font-size: 32px;
      font-weight: 800;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: ${(props: any) => props.theme.colors.text};
    font-size: 14px;
    font-weight: 600;
  }

  input, select {
    width: 100%;
    height: 50px;
    padding: 0 16px;
    background-color: ${(props: any) => props.theme.colors.white};
    border: 1px solid ${(props: any) => props.theme.colors.main};
    border-radius: 12px;

    color: ${(props: any) => props.theme.colors.text};
    font-size: 16px;
    outline: none;

    &::placeholder {
      color: ${(props: any) => props.theme.colors.gray};
    }

    &:focus {
      border: 2px solid ${(props: any) => props.theme.colors.mainHover};
    }
  }
`;

export const SignupButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  margin-top: 24px;

  background-color: ${(props: any) => props.theme.colors.main};
  border: none;
  border-radius: 12px;

  color: ${(props: any) => props.theme.colors.white};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  /* 1차과제코드리뷰개념 */
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props: any) => props.theme.colors.mainHover};
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: ${(props: any) => props.theme.colors.gray};
    cursor: not-allowed;
  }
`;

export const LoginLinkButton = styled.button`
  display: inline-block;
  margin-top: 20px;
  background: none;
  border: none;
  color: ${(props: any) => props.theme.colors.gray};
  font-size: 14px;
  text-align: center;
  cursor: pointer;

  span {
    color: ${(props: any) => props.theme.colors.main};
    font-weight: bold;
    text-decoration: underline;
  }
`;