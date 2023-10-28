import styled from "styled-components";

export const Footer = () => {
  return <StyledFooter>&copy; 2023 test Inc.</StyledFooter>;
};

const StyledFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
