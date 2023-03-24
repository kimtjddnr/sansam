import styled from "styled-components";

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  soso: boolean;
}

function StyledButtonSoso({ onClick, soso }: Props) {
  return (
    <div>
      {soso === false ? (
        <StyledDiv>
          <img
            src={"/img/mountainEmpty.png"}
            alt="soso button"
            width={"60%"}
            onClick={onClick}
          />
        </StyledDiv>
      ) : (
        <StyledDiv>
          <img
            src={"/img/mountainFull.png"}
            alt="soso button"
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

export default StyledButtonSoso;
