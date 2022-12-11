import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

export default function Day({ day }) {
  return (
    <DayContent>
      <p>{`${day.weekday} - ${day.date}`}</p>
      <ShowtimesContent>
        {day.showtimes.map(showtime => {
          return (
            <Link key={showtime.id} to={`/assentos/${showtime.id}`}>
              <Button text={showtime.name} />
            </Link>
          );
        })}
      </ShowtimesContent>
    </DayContent>
  );
}


const DayContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 85%;
  margin-bottom: 23px;
  p {
    font-size: 20px;
    margin-bottom: 22px;
  }
`;

const ShowtimesContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 9px;
`;
