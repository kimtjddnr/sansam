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
      <StyledTextBox
        rows={10}
        placeholder="등산 후기를 자유롭게 입력해주세요"
      ></StyledTextBox>
    </StyledDiv>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* font-family: "GmarketSansLight"; */
  font-weight: bold;
`;

const StyledDiv = styled.div`
  padding-top: 40%;
`;

const StyledHeader = styled.h1`
  font-family: "GmarketSansLight";
  text-align: center;
  font-size: 6vw;
  padding: 4vw;
`;

const StyledTextBox = styled.textarea`
  margin-top: 10%;
  margin-left: 10%;
  width: 80%;
  resize: none;
  border-radius: 5px;
  border: 2px solid #d9d9d9;
  /* float: center; */
`;

// const StyledButtonEasy = styled.img`
//   padding-top: 10%;
//   margin-left: 10vw;
// `;

// const StyledEasy = styled.img``;

export default Review;
