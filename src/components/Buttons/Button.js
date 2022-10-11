import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  gap: 16px;
  display: flex;
  justify-content: space-evenly;
`;

const StyledButtons = styled.button`
  text-transform: uppercase;
  background-color: #30a7d7;
  cursor: pointer;
  color: #fff;
  padding: 8px;
  border-radius: 5px;
  border: none;
  min-width: 50%;
  :only-of-type {
    width: 80%;
  }
  :disabled {
    background-color: #30a7d730;
    cursor: unset;
  }
`;

const Button = ({ buttonText, handleClick, id, disabled }) => {
  return (
    <StyledButtons id={id} disabled={disabled} onClick={handleClick}>
      {buttonText}
    </StyledButtons>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
