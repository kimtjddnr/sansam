import styled from "styled-components";

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  hard: boolean;
}

function StyledButtonHard({ onClick, hard }: Props) {
  console.log(hard);
  return (
    <div>
      {hard === false ? (
        <StyledDiv>
          <img
            src={"/img/mountainEmpty.png"}
            alt="hard button"
            width={"25%"}
            onClick={onClick}
          />
        </StyledDiv>
      ) : (
        <StyledDiv>
          <img
            src={"/img/mountainFull.png"}
            alt="hard button"
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
  /* margin-left: 10vw; */
`;

export default StyledButtonHard;
