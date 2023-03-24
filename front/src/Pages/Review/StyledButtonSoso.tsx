import styled from "styled-components";

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  soso: boolean;
}

function StyledButtonSoso({ onClick, soso }: Props) {
  console.log(soso);
  return (
    <div>
      {soso === false ? (
        <StyledDiv>
          <img
            src={"/img/mountainEmpty.png"}
            alt="soso button"
            width={"25%"}
            onClick={onClick}
          />
        </StyledDiv>
      ) : (
        <StyledDiv>
          <img
            src={"/img/mountainFull.png"}
            alt="soso button"
            width={"25%"}
            onClick={onClick}
          />
        </StyledDiv>
      )}
    </div>
  );
}

const StyledContainer = styled.div`
  /* display: inline-block; */
`;

const StyledDiv = styled.div`
  padding-top: 10%;
  float: left;
  /* margin-left: 10vw; */
`;

export default StyledButtonSoso;
