import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4em;
  background: transparent;
  // border: 0.05rem solid var(--mainBlue);
  border-style: solid;
  border-size: 0.04rem;
  border-color: var(--mainBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainRed)" : "var(--mainBlue)"};

  color: ${(props) => (props.cart ? "var(--mainRed)" : "var(--mainDark)")};
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.cart ? "var(--mainRed)" : "var(--mainBlue)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
