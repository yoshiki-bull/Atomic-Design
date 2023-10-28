import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">HOME</StyledLink>
      <StyledLink to="/users">USERS</StyledLink>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const StyledLink = styled(Link)`
  margin: 0 8px;
`;
