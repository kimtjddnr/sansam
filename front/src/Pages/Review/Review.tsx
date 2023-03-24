import styled from "styled-components";
import { useState } from "react";
import StyledButtonEasy from "./StyledButtonEasy";
import StyledButtonSoso from "./StyledButtonSoso";
import StyledButtonHard from "./StyledButtonHard";

function Review() {
  const [easy, setEasy] = useState(false);
  const [soso, setSoso] = useState(false);
  const [hard, setHard] = useState(false);

  function easyToggle() {
    console.log(easy);
    if (easy === false) setEasy(true);
    if (soso === true) setSoso(false);
    if (hard === true) setHard(false);
  }

  function sosoToggle() {
    if (easy === false) setEasy(true);
    if (soso === false) setSoso(true);
    if (hard === true) setHard(false);
  }

  function hardToggle() {
    if (easy === false) setEasy(true);
    if (soso === false) setSoso(true);
    if (hard === false) setHard(true);
  }

  return (
    <StyledDiv>
      <StyledHeader>
        오늘 "앞산 둘레길 1길" <br /> 등산은 어땠나요??
      </StyledHeader>
      <StyledContainer>
        <StyledButtonEasy onClick={easyToggle} easy={easy} />
        <StyledButtonSoso onClick={sosoToggle} soso={soso} />
        <StyledButtonHard onClick={hardToggle} hard={hard} />
      </StyledContainer>
    </StyledDiv>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* width: 90%; */
`;

const StyledDiv = styled.div`
  padding-top: 40%;
  height: 100vh;
  font-family: "GmarketSansLight";
`;

const StyledHeader = styled.h1`
  font-size: 6vw;
  text-align: center;
  padding: 4vw;
`;

// const StyledButtonEasy = styled.img`
//   padding-top: 10%;
//   margin-left: 10vw;
// `;

// const StyledEasy = styled.img``;

export default Review;
