import styled from "styled-components";

export default function Loading() {
  const gifUrl = "https://media4.giphy.com/media/ZO9b1ntYVJmjZlsWlm/" +
    "giphy.gif?cid=ecf05e47whzesri5c2fggdkn7mu5mund5k2jqjbz2eyejcel&rid=giphy.gif&ct=g";

  return (
    <LoadingImage src={gifUrl} alt="Loading..." />
  );
}

const LoadingImage = styled.img`
  max-width: 40%;
`;
