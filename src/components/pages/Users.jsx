import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `アル-${val}`,
    image:
      "https://source.unsplash.com/russian-blue-cat-wearing-yellow-sunglasses-yMSecCHsIBc",
    email: "12345@example.com",
    phone: "080-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <StyledConstainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <StyledUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </StyledUserArea>
    </StyledConstainer>
  );
};

const StyledConstainer = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const StyledUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
