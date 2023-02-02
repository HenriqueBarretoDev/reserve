import styled from "styled-components";

export const MainReservation = styled.div`
  width: 100%;
  display: flex;
`;

export const BoxTime = styled.div`
  background-color: #f87125;
  max-width: 20%;
  padding: 0 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;

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
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  text-align: center;
  padding: 5px 0;

  p, span {
    color: #08152c;
    font-size: 22px;
    font-weight: bold;
  }

  label {
    font-size: 18px;
    font-weight: bolder;
  }

  input {
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid black;
  }
`;
