import { useEffect, useState } from "react";
import { Container, FlexBox, Span } from "../Style/Comp.Style";

import Title from "./Title";

function Counter() {
  let [num, setNum] = useState([0, 0, 0, 0]);

  // Calculate Dates
  const calc = () => {
    const oldY = new Date().getTime();
    const newY = new Date(
      `${new Date().getFullYear() + 1}-01-01T00:00:00`
    ).getTime();
    // difference between two dates in seconds
    const difference = Math.floor((newY - oldY) / 1000);
    // validation
    if (difference <= 0) {
      alert("Count Down has ended!");
      return [0, 0, 0, 0];
    }
    // calc data
    const day = Math.floor(difference / (3600 * 24));
    const hour = Math.floor((difference % (3600 * 24)) / 3600);
    const minute = Math.floor((difference % 3600) / 60);
    const second = Math.floor(difference % 60);
    // return items in a array
    return [day, hour, minute, second];
  };

  // re-render every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setNum(calc());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container>
      <Title>New Year CountDown</Title>
      <Title>{new Date().getFullYear()}</Title>
      <FlexBox>
        {num.map((item, i) => {
          return <Span key={i}>{String(item).padStart(2, 0)}</Span>;
        })}
      </FlexBox>
    </Container>
  );
}

export default Counter;
