import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ColumnLayout, PageLayout, RowLayout } from "../components/Layout";
import { ContentText, TitleText, MainText } from "../components/Text";

const sampleData = {
  article: {
    title: "title",
    keyword: "keyword",
    full_text: "full_text",
  },
  related_patents: [
    {
      patent_title: "patent_title1",
      patent_description: "patent_description",
      patent_link: "patent_link",
    },
    {
      patent_title: "patent_title2",
      patent_description: "patent_description",
      patent_link: "patent_link",
    },
    {
      patent_title: "patent_title3",
      patent_description: "patent_description",
      patent_link: "patent_link",
    },
  ],
};

const Detail = () => {
  const [data, setData] = useState(sampleData);
  const { id } = useParams();

  useEffect(() => {
    axios
      // analsis/1
      .get("https://werticlebe.gabia.io/api/article_analysis/" + id)
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <PageLayout>
      <div style={{ height: "60px" }} />
      <MainText>{data.article.title}</MainText>
      <div style={{ height: "10px" }} />
      <RowLayout
        style={{
          gap: "10px",
        }}
      >
        <Keyword>키워드</Keyword>
        <ContentText>{data.article.keyword}</ContentText>
      </RowLayout>

      <div style={{ height: "40px" }} />
      <RowLayout
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "90px",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <TitleText
            style={{
              marginLeft: "20px",
            }}
          >
            기사 내용
          </TitleText>
          <div style={{ height: "20px" }} />
          <BorderOutlinebox>
            <ContentText>{data.article.full_text}</ContentText>
            <button
              style={{
                backgroundColor: "#3D67FC1A",
                padding: "10px",
                borderRadius: "10px",
                marginTop: "20px",
                cursor: "pointer",
                color: "#3D67FC",
                fontSize: "12px",
                border: "none",
                width: "100%",
              }}
            >
              원문 기사 보러가기
            </button>
          </BorderOutlinebox>
        </div>

        <ListLayout>
          <TitleText>관련 특허 정보를 알아보세요</TitleText>
          {data.related_patents.map((patent, index) => (
            <PatentItem
              key={index}
              patent_title={patent.patent_title}
              patent_description={patent.patent_description}
              patent_link={patent.patent_link}
            />
          ))}
        </ListLayout>
      </RowLayout>
      <div style={{ height: "200px" }} />
    </PageLayout>
  );
};

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const Keyword = styled.div`
  font-size: 12px;
  color: #3d67fc;
  border-radius: 10px;
  background-color: #3d67fc1a;
  padding: 0px 20px;
  white-space: nowrap;
`;

const PatentItem = ({ patent_title, patent_description, patent_link }) => {
  return (
    <BorderBox>
      <TitleText>{patent_title}</TitleText>
      <div style={{ height: "10px" }} />
      <ContentText>{patent_description}</ContentText>
      <div style={{ height: "20px" }} />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <a
          href={patent_link}
          style={{
            color: "black",
            textDecoration: "underline",
            fontSize: "12px",
          }}
        >
          자세히 보기
        </a>
      </div>
    </BorderBox>
  );
};

const BorderBox = styled.div`
  border-radius: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
`;

const BorderOutlinebox = styled.div`
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  height: 100%;
  min-height: 200px;
`;
export default Detail;
