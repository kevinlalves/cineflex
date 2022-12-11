import styled from "styled-components";

const Seats = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: 85%;
  margin-bottom: 10px;
`;

const Seat = styled.button`
  height: 26px;
  width: 26px;
  padding-bottom: 4px;
  margin-bottom: 11px;
  background-color: ${props => props.theme.color[props.seatState]};
  border-radius: 100%;
  border: 1px ${props => props.theme.color[props.seatState+"Border"]} solid;
`;

export { Seats, Seat };
