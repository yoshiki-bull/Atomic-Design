import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled(BaseButton)`
  background-color: #11999e;
`;
