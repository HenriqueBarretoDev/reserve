import styled from "styled-components";

export const MainReservation = styled.div`
  width: 100%;
  display: flex;
  //background-color: #8ed7ec;
`;

export const BoxTime = styled.div`
  background-color: #f87125;
  max-width: 20%;
  padding: 0 10px;
  border: 1px solid black;

  p {
    padding: 4px;
    background-color: #08152c;
    height: 50px;
    width: 50px;
    color: #fefefe;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Reservations = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-self: center;
  width: 100%;
  justify-content: center;
  border: 1px solid black;

  p {
    color: #08152c;
    font-size: 20px;
    font-weight: bold;
    //background-color: green;
    //padding: 5px;
  }
`;
