import styled from "styled-components";
import MovieContent from "../style/MovieContent";

export default function Footer({ posterURL, title, weekday, name  }) {
  return (
    <FooterContent>
      <MovieImage>
        <img src={posterURL} alt="movie poster" />
      </MovieImage>
      <MovieInfo>
        <p>{title}</p>
        {weekday && <p>{`${weekday} - ${name}`}</p>}
      </MovieInfo>
    </FooterContent>
  );
}

const FooterContent = styled.div`
  background-color: ${props => props.theme.color.titleBack};
  height: 117px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

const MovieImage = styled(MovieContent)`
  width: 64px;
  height: 89px;
  margin-left: 10px;
  margin-right: 14px;
  margin-bottom: 0px;
  cursor: default;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 26px;
  gap: 5px;
`;
