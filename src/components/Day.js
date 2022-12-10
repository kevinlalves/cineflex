import styled from "styled-components";

export default function Day({ day }) {
  return (
    <DayContent>
      <p>{`${day.weekday} - ${day.date}`}</p>
      <ShowtimesContent>
        {day.showtimes.map(showtime => <Button text={showtime.name} />)}
      </ShowtimesContent>
    </DayContent>
  );
}


const DayContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const ShowtimesContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 9px;
`;
