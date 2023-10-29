import React, { memo } from "react";
import styled from "styled-components";

// import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <StyledContainer>
      <StyledImg height={160} width={160} src={image} alt={name} />
      <StyledName>{name}</StyledName>
      {isAdmin && <StyledEdit>編集</StyledEdit>}
    </StyledContainer>
  );
});

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
