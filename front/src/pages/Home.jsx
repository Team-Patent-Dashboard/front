import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ColumnLayout,
  PageLayout,
  TextLayout,
  ListLayout,
  MainLayout,
} from "../components/Layout";
import { ContentText, MainText, TitleText } from "../components/Text";

const Home = () => {
  const [main, setMain] = useState({});
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    axios
      .get("https://werticlebe.gabia.io/api/main_news")
      .then((response) => {
        const data = response.data;
        setMain(data[0]);
        setDataList(data.slice(1));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <PageLayout>
      <img
        src={require("../assets/main.jpeg")}
        style={{
          width: "100vw",
          height: "500px",
          marginBottom: "50px",
          objectFit: "cover",
        }}
        alt="logo"
      />
      <Field>
        <MainText> 주요 특허 정보를 쉽게 탐색해보세요</MainText>
        <ViewButton to="/news">기사 더보기</ViewButton>
      </Field>
      <div style={{ height: "10px" }} />
      <MainLayout>
        <MainItem
          id={main.id}
          title={main.title}
          keyWord={main.keyword}
          source={main.source}
          imgUrl={main.imageUrl}
        />
        <ListLayout>
          {dataList.map((data, index) => (
            <SubItem
              key={index}
              id={data.id}
              title={data.title}
              keyWord={data.keyword}
              source={data.source}
              imgUrl={data.imageUrl}
            />
          ))}
        </ListLayout>
      </MainLayout>
      <img
        src={require("../assets/footer.png")}
        style={{ width: "100vw", height: "100%", marginTop: "50px" }}
        alt="logo"
      />
    </PageLayout>
  );
};

const Field = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`;

const ViewButton = styled(Link)`
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #444;
  }
`;

const MainItem = ({ id, title, keyWord, source, imgUrl }) => {
  return (
    <MainItemButton to={`/detail/${id}`}>
      {imgUrl ? (
        <ExpandedImage src={imgUrl} alt="100 * 100 size image" />
      ) : (
        <ExpandedImage
          src="https://via.placeholder.com/300.jpg"
          alt="100 * 200 size image"
        />
      )}
      <TextLayout
        style={{
          padding: "20px",
          width: `calc(100% - 40px)`,
        }}
      >
        <TitleText>{title ?? "제목이 없습니다."}</TitleText>
        <ContentText>{keyWord ?? "키워드"}</ContentText>
        <ContentText>{source ?? "출처"}</ContentText>
      </TextLayout>
    </MainItemButton>
  );
};

const MainItemButton = styled(Link)`
  width: 60%;
  height: 100%;
  display: flex;
  position: relative;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
`;

const ExpandedImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const SubItem = ({ id, title, keyWord, source, imgUrl }) => {
  return (
    <SubItemButton to={`/detail/${id}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          width: "100%",
        }}
      >
        <TitleText>{title ?? "제목이 없습니다."}</TitleText>
        <ContentText>{keyWord ?? "키워드"}</ContentText>
        {/* <ContentText>{source ?? "출처"}</ContentText> */}
      </div>
      <div style={{ width: "100px", height: "100px", marginLeft: "10px" }}>
        {imgUrl ? (
          <img
            src={imgUrl}
            alt="sub image"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "10px",
            }}
          />
        ) : (
          <img
            src="https://via.placeholder.com/70.jpg"
            alt="100 * 200 size image"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "10px",
            }}
          />
        )}
      </div>
    </SubItemButton>
  );
};

const SubItemButton = styled(Link)`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 0;
  margin: 0;
  text-decoration: none;
`;

export default Home;
