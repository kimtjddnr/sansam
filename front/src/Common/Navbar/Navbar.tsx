import styled from "styled-components";
import HamBtn from "./HamBtn";

function Navbar() {
  return (
    <StyledDiv className="Navbar">
      <StyledImg className="logoImg" src="/img/logo2.png" alt="logo" />
      <HamBtn />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  height: 50px;
  width: 100%;
  background-color: white;
  margin: 0;
  padding: 0;
  border: 2px solid #8bcfa2;
`;

const StyledImg = styled.img`
  margin-left: 8px;
  margin-top: 1px;
  height: 60px;
`;

export default Navbar;
