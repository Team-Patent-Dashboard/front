import styled from "styled-components";
import { PageLayout } from "../components/Layout";

const About = () => {
  return (
    <PageLayout
      style={{
        display: "flex",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: "100px",
      }}
    >
      <PersonInfo
        id="1"
        img="../assets/be.png"
        name="용이립"
        position="Backend Developer"
        email="none"
      />
      <PersonInfo
        id="2"
        img="../assets/fe.jpeg"
        name="이유림"
        position="Frontend Developer"
        email="leeyou6757@gmail.com"
      />
      <PersonInfo
        id="3"
        img="../assets/da.jpeg"
        name="김채원"
        position="Data Analyst"
        email="chaewon5045@gmail.com"
      />
      <PersonInfo
        id="4"
        img="../assets/ds.jpeg"
        name="하람"
        position="Designer"
        email="none"
      />
    </PageLayout>
  );
};

const PersonInfo = ({ id, img, name, position, email }) => {
  return (
    <PersonInfoLayout>
      <PersonImg
        src={
          id === "1"
            ? require("../assets/be.png")
            : id === "2"
            ? require("../assets/fe.jpeg")
            : id === "3"
            ? require("../assets/da.jpeg")
            : id === "4"
            ? require("../assets/ds.jpeg")
            : ""
        }
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
        alt={name}
      />
      <PersonName>{name}</PersonName>
      <PersonPosition>{position}</PersonPosition>
      <PersonEmail>{email}</PersonEmail>
    </PersonInfoLayout>
  );
};

const PersonInfoLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const PersonImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const PersonName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const PersonPosition = styled.div`
  font-size: 15px;
`;

const PersonEmail = styled.div`
  font-size: 15px;
  color: gray;
`;

export default About;
