import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PageLayout, TextLayout } from "../components/Layout";
import { MainText, TitleText, ContentText } from "../components/Text";

const sample = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const News = () => {
  return (
    <PageLayout>
      <div style={{ height: "40px" }}></div>
      <MainText>전체 기사</MainText>
      <NewsGrid>
        {sample.map((data, index) => (
          <NewsCard
            key={index}
            id={data.id}
            title={data.title}
            keyWord={data.keyWord}
            imgUrl={data.imgUrl}
            source={data.source}
          />
        ))}
      </NewsGrid>
    </PageLayout>
  );
};

const NewsCard = ({ id, title, keyWord, imgUrl, source }) => {
  const [dataList, setDataList] = useState(sample);
  return (
    <Card to={`/detail/${id}`}>
      {imgUrl ? (
        <CardImage src={imgUrl} />
      ) : (
        <CardImage src="https://via.placeholder.com/300.jpg" />
      )}

      <TextLayout
        style={{
          position: "relative",
        }}
      >
        <TitleText>{title ?? "제목이 없습니다."}</TitleText>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
          }}
        >
          <ContentText>{keyWord ?? "키워드"}</ContentText>
          <ContentText>{source ?? "출처"}</ContentText>
        </div>
      </TextLayout>
    </Card>
  );
};

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const Card = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
`;

export default News;
