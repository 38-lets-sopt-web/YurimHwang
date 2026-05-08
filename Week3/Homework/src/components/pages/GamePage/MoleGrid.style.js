import styled from '@emotion/styled';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); //가로 2칸
  grid-template-rows: repeat(2, 1fr); //세로 2칸
  gap: 20px;

  background-color: #fff5f7;
  padding: 40px;
  border-radius: 30px;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
`;