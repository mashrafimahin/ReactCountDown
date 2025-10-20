import styled from "styled-components";

export const TitleText = styled.h1`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 36px;
  color: #222;
  font-weight: 400;
  text-align: center;
  cursor: default;
`;

export const Container = styled.div`
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 6px 4px 0 rgb(0, 0, 0, 0.08);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Span = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 18px 24px;
  border-radius: 10px;
  color: #fff;
  background-color: #333;
  font-size: 24px;
  cursor: default;
`;
