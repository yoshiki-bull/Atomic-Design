import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
  const { image, name, isAdmin } = props;
  const context = useContext(UserContext);
  console.log(context);

  return (
    <StyledContainer>
      <StyledImg height={160} width={160} src={image} alt={name} />
      <StyledName>{name}</StyledName>
      {isAdmin && <StyledEdit>編集</StyledEdit>}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  border-radius: 50%;
`;

const StyledName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #ffd6ff;
`;

const StyledEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
