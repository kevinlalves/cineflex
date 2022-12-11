import styled from "styled-components";

export default function Button({ text, onClick, dataTest }) {
  return (
    <ButtonContent data-test={dataTest} onClick={onClick}>
      {text}
    </ButtonContent>
  );
}

const ButtonContent = styled.button`
  border: none !important;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-top: 8px;
  color: white;
  background-color: ${props => props.theme.color.button};
  font-size: 18px;
  border-radius: 3px;
`;
