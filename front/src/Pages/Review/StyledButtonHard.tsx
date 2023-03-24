import styled from "styled-components";

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  hard: boolean;
}

function StyledButtonHard({ onClick, hard }: Props) {
  return (
    <div>
      {hard === false ? (
        <StyledDiv>
          <img
            src={"/img/mountainEmpty.png"}
            alt="hard button"
            width={"60%"}
            onClick={onClick}
          />
        </StyledDiv>
      ) : (
        <StyledDiv>
          <img
            src={"/img/mountainFull.png"}
            alt="hard button"
            width={"60%"}
            onClick={onClick}
          />
        </StyledDiv>
      )}
    </div>
  );
}

const StyledDiv = styled.div`
  padding-top: 10%;
`;

export default StyledButtonHard;
