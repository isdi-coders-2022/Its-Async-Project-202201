import styled from "styled-components";

const StyledButton = styled.button`
  height: 40px;
  background-color: #55cc44;
  color: #24282f;
  border-radius: 5px;
  width: 120px;
  border-style: none;
`;

const Button = ({ text }) => {
  return (
    <>
      <StyledButton
        type="button"
        className="btn btn-secondary btn-sm me-md-2 me-3"
        onClick={() => ""}
      >
        ButtonText
      </StyledButton>
    </>
  );
};

export default Button;
