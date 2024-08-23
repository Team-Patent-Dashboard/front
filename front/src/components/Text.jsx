import styled from "styled-components";

const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;

  white-space: normal;
`;

const MainText = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const TitleText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const ContentText = styled(Text)`
  width: 100%;
  font-size: 14px;
  font-weight: normal;
  color: #838383;
`;

export { TitleText, ContentText, MainText };
