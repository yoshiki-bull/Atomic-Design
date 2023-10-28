import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled(BaseButton)`
  background-color: #40514e;
`;
