import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderButton to="/">
        <LogoImage src={require("../assets/WERTICLE.png")} alt="Logo" />
      </HeaderButton>
      <HeaderItem>
        <HeaderButton to="/about">
          <ItemImage src={require("../assets/about us.png")} alt="Logo" />
        </HeaderButton>

        <ItemImage src={require("../assets/about service.png")} alt="Logo" />
        <ItemImage
          src={require("../assets/contact.png")}
          style={{ height: "12px" }}
          alt="Logo"
        />
      </HeaderItem>
    </HeaderLayout>
  );
};

const HeaderButton = styled(Link)`
  color: transparent;
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  height: 20px;
`;

const ItemImage = styled.img`
  height: 14px;
`;

const HeaderLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  width: calc(100% - 60px);
  background-color: black;
  color: #fff;
  padding: 0 30px;
  text-align: center;

  z-index: 100;
`;

const HeaderItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20px;
  gap: 50px;
`;

export default Header;
