import styled from "styled-components";

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  easy: boolean;
}

function StyledButtonEasy({ onClick, easy }: Props) {
  return (
    <StyledDiv>
      {easy === false ? (
        <StyledInnerDiv>
          <img
            src={"/img/mountainEmpty.png"}
            alt="easy button"
            width={"60%"}
            onClick={onClick}
          />
        </StyledInnerDiv>
      ) : (
        <StyledInnerDiv>
          <img
            src={"/img/mountainFull.png"}
            alt="easy button"
            width={"60%"}
            onClick={onClick}
          />
        </StyledInnerDiv>
      )}
      <StyledText></StyledText>쉬움
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin-left: 10%;
`;

const StyledInnerDiv = styled.div`
  padding-top: 10%;
`;

const StyledText = styled.div;

export default StyledButtonEasy;
