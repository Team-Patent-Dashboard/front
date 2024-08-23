import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { PageLayout, TextLayout } from "../components/Layout";
import { MainText, TitleText, ContentText } from "../components/Text";

const News = () => {
  const [main, setMain] = useState([]);
  const [iframeList, setIframeList] = useState([]);

  useEffect(() => {
    axios
      .get("https://werticlebe.gabia.io/api/all_news")
      .then((response) => {
        const data = response.data;
        setMain(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // main.map((data) => {
    //   iframeList.push(
    //     <div style={{ width: "100%", height: "120px", position: "relative" }}>
    //       <div
    //         style={{
    //           width: "100%",
    //           height: "120px",
    //           position: "absolute",
    //           top: 0,
    //           left: 0,
    //           backgroundColor: "transparent",
    //           zIndex: 1,
    //         }}
    //       ></div>
    //       {/* <iframe
    //         src={data.source}
    //         width="100%"
    //         height="120px"
    //         style={{ border: "none", position: "absolute", top: 0, left: 0 }}
    //         onClick={(e) => e.preventDefault()}
    //         onLoad={(e) => e.preventDefault()}
    //       ></iframe> */}
    //     </div>
    //   );
    // });
  }, []);

  return (
    <PageLayout>
      <div style={{ height: "60px" }}></div>
      <MainText>
        전체 기사 &nbsp;
        {main.length > 0 ? `(${main.length})` : ""}
      </MainText>
      <NewsGrid>
        {main.map((data, index) => (
          <NewsCard
            key={index}
            id={data.id}
            title={data.title}
            keyWord={data.keyword}
            imgUrl={data.imgUrl}
            source={data.source}
            // iframe={iframeList[index]}
          />
        ))}
      </NewsGrid>
    </PageLayout>
  );
};

const NewsCard = ({ id, title, keyWord, imgUrl, source, iframe }) => {
  return (
    <Card to={`/detail/${id}`}>
      {imgUrl ? (
        <CardImage src={imgUrl} />
      ) : (
        <div
          style={{
            width: "100%",
            height: "120px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            style={{
              width: "100px",
            }}
          />
        </div>
      )}

      <TitleText>{title ?? "제목이 없습니다."}</TitleText>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
        }}
      >
        <ContentText>{keyWord ?? "키워드"}</ContentText>
        {/* <ContentText>{source ?? "출처"}</ContentText> */}
      </div>
    </Card>
  );
};

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const Card = styled(Link)`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
`;

export default News;
