import styled from "styled-components";

export default function Navbar() {
  return (
    <NavbarContent>
      <p>CINEFLEX</p>
    </NavbarContent>
  );
}

const NavbarContent = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color.titleBack};
  color: ${props => props.theme.color.title};
  font-size: 34px;
`;
