import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButtons = styled.button`
  min-width: 50%;
  padding: 8px;
  :only-of-type {
    width: 100%;
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
