import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrow from "../assets/Arrow.png";

export default function Navbar({ backExists }) {
  const navigate = useNavigate();

  return (
    <NavbarContent>
      {backExists && <img onClick={() => navigate(-1)} src={arrow} alt="back arrow" />}
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
  img {
    left: 20px;
    position: fixed;
    top: 24px;
    cursor: pointer;
  }
`;
