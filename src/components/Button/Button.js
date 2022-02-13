import styled from "styled-components";
import "@fontsource/roboto";

const StyledButton = styled.button`
  height: 40px;
  background-color: #55cc44;
  color: #24282f;
  border-radius: 5px;
  width: 120px;
  border-style: none;
  font-family: "Roboto";
`;

const Button = ({ text, actionOnClick }) => {
  return (
    <>
      <StyledButton
        type="button"
        className="btn btn-secondary me-md-2 me-3"
        onClick={actionOnClick}
      >
        {text}
      </StyledButton>
    </>
  );
};

export default Button;
