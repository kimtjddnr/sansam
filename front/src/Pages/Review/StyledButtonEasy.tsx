import styled from "styled-components";

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  easy: boolean;
}

function StyledButtonEasy({ onClick, easy }: Props) {
  console.log(easy);
  return (
    <div>
      {easy === false ? (
        <StyledDiv>
          <img
            src={"/img/mountainEmpty.png"}
            alt="easy button"
            width={"25%"}
            onClick={onClick}
          />
        </StyledDiv>
      ) : (
        <StyledDiv>
          <img
            src={"/img/mountainFull.png"}
            alt="easy button"
            width={"25%"}
            onClick={onClick}
          />
        </StyledDiv>
      )}
    </div>
  );
}

const StyledDiv = styled.div`
  padding-top: 10%;
  margin-left: 10vw;
`;

export default StyledButtonEasy;
