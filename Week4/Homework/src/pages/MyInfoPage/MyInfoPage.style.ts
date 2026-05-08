import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props: any) => props.theme.colors.background};
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 60px 20px;

  h2 {
    margin-bottom: 40px;
    color: ${(props: any) => props.theme.colors.text};
    font-size: 24px;
    font-weight: 800;
  }
`;

export const InfoBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 24px;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  .row {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    
    span:first-child {
      font-weight: 700;
      color: ${(props: any) => props.theme.colors.text};
    }
    span:last-child {
      color: ${(props: any) => props.theme.colors.gray};
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 30px;

  label {
    font-size: 14px;
    font-weight: 600;
    color: ${(props: any) => props.theme.colors.text};
  }

  input {
    width: 100%;
    height: 48px;
    padding: 0 16px;
    border: 1px solid ${(props: any) => props.theme.colors.main};
    border-radius: 8px;
    outline: none;
    transition: border 0.2s;

    &:focus {
      border: 2px solid ${(props: any) => props.theme.colors.mainHover};
    }
  }
`;

export const MainButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: ${(props: any) => props.theme.colors.main};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${(props: any) => props.theme.colors.mainHover};
  }
`;