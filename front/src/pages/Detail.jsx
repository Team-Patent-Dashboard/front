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
  console.log(id);

  useEffect(() => {
    axios
      .post("https://werticlebe.gabia.io/api/article_analysis", { id })
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
      <ContentText>{data.article.keyword}</ContentText>
      <div style={{ height: "40px" }} />
      <RowLayout
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "50px",
        }}
      >
        <BorderOutlinebox>
          <TitleText>기사 내용</TitleText>
          <ContentText>{data.article.full_text}</ContentText>
        </BorderOutlinebox>
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

const PatentItem = ({ patent_title, patent_description, patent_link }) => {
  return (
    <BorderBox>
      <TitleText>{patent_title}</TitleText>
      <ContentText>{patent_description}</ContentText>
      <a href>
        <ContentText>{patent_link}</ContentText>
      </a>
    </BorderBox>
  );
};

const BorderBox = styled.div`
  border-radius: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
`;

const BorderOutlinebox = styled.div`
  border: 1px solid #f5f5f5;
  border-radius: 20px;
  padding: 10px;
  width: 50%;
  height: 100%;
  min-height: 200px;
`;
export default Detail;
