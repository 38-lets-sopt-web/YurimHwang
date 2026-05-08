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

export const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 50px;

  label {
    font-size: 14px;
    font-weight: 600;
    color: ${(props: any) => props.theme.colors.text};
  }
`;

export const SearchInput = styled.input`
  height: 48px;
  padding: 0 16px;
  border: 1px solid ${(props: any) => props.theme.colors.main};
  border-radius: 8px;
  outline: none;

  &:focus {
    border: 2px solid ${(props: any) => props.theme.colors.mainHover};
  }
`;

export const SearchButton = styled.button`
  height: 48px;
  background-color: ${(props: any) => props.theme.colors.main};
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    background-color: ${(props: any) => props.theme.colors.gray};
    cursor: not-allowed;
  }
`;

export const SearchResultCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  margin-bottom: 40px;
  background-color: white;
  border: 2px solid ${(props: any) => props.theme.colors.main};
  border-radius: 12px;

  h3 {
    margin-bottom: 15px;
    color: ${(props: any) => props.theme.colors.main};
    font-size: 18px;
  }

  .info-row {
    margin-bottom: 8px;
    font-size: 16px;
    span {
      font-weight: bold;
      margin-right: 10px;
    }
  }
`;

export const ListTitle = styled.h3`
  align-self: flex-start;
  margin-bottom: 20px;
  color: ${(props: any) => props.theme.colors.text};
  font-size: 20px;
`;

export const MemberGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  width: 100%;
`;

export const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    border: 1px solid ${(props: any) => props.theme.colors.main};
  }

  h4 {
    color: ${(props: any) => props.theme.colors.text};
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const PartTag = styled.span`
  padding: 4px 8px;
  background-color: ${(props: any) => props.theme.colors.background};
  color: ${(props: any) => props.theme.colors.main};
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
`;