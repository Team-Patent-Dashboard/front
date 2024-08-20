import styled from "styled-components";

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16vw;
`;

const RowLayout = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 340px;
`;

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 36%;
`;

const TextLayout = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: flex-start;
  width: 100%;
`;

export {
  PageLayout,
  RowLayout,
  ColumnLayout,
  MainLayout,
  ListLayout,
  TextLayout,
};
