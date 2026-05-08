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
  max-width: 800px;
  padding: 60px 20px;

  h2 {
    margin-bottom: 40px;
    color: ${(props: any) => props.theme.colors.text};
    font-size: 24px;
    font-weight: 800;
  }
`;

export const BackButton = styled.button`
  align-self: flex-start;
  margin-bottom: 20px;
  background: none;
  border: none;

  color: ${(props: any) => props.theme.colors.gray};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${(props: any) => props.theme.colors.main};
  }
`;

export const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 450px;
  padding: 32px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  border-top: 4px solid ${(props: any) => props.theme.colors.main};
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 1px solid ${(props: any) => props.theme.colors.background};

  font-size: 16px;
  color: ${(props: any) => props.theme.colors.text};

  span {
    font-weight: 800;
    color: ${(props: any) => props.theme.colors.main};
  }

  &:last-child {
    border-bottom: none;
  }
`;