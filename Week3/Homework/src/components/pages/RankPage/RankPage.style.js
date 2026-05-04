import styled from '@emotion/styled';

export const RankWrapper = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  flex: 1;
`;

export const RankHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h3 { color: #676767ff; font-weight: bold; }
`;

export const ResetButton = styled.button`
  background-color: #eb536aff;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  &:hover { background-color: #ff99aa; }
`;

export const RankTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.tr`
  background-color: #ffdcdeff; 
  th {
    padding: 12px;
    color: #444;
    font-size: 14px;
    border: 1px solid #eee;
  }
`;

export const TableRow = styled.tr`
  text-align: center;
  td {
    padding: 12px;
    border: 1px solid #f9f9f9;
    font-size: 14px;
    color: #666;
  }
  &:hover { background-color: #fafafa; }
`;