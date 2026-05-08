import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 40px;
  background-color: #233549; 
  border-bottom: 2px solid ${(props: any) => props.theme.colors.main};
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props: any) => props.theme.colors.white};
    font-size: 22px;
    font-weight: 800;
  }

  p {
    margin-top: 4px;
    color: ${(props: any) => props.theme.colors.main}; 
    font-size: 14px;
    font-weight: 600;
  }
`;

export const HeaderRight = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavTab = styled.button`
  background: none;
  border: none;

  color: ${(props: any) => props.theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props: any) => props.theme.colors.main};
    transform: translateY(-2px);
  }

  &:active {
    color: ${(props: any) => props.theme.colors.mainHover};
  }
`;