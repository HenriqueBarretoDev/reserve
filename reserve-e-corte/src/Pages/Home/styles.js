import styled from 'styled-components';

export const TopDates = styled.div``;

export const BottomDates = styled.div``;

export const ContainerSchedules = styled.div`
  header {
    background-color: #f0eeed;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    margin: 0;
  }

  h1 {
    color: #08152c;
    text-align: center;
  }
`;

export const IconsLeftSchedules = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  div {
    display: flex;
    flex-direction: row !important;
    padding-right: 10px;
  }

  h1 {
    font-size: 20px;
    display: flex;
    white-space: nowrap;
    align-items: center;
  }

  svg {
    size: 30px;
    width: 100%;
  }

  :nth-child(1) svg {
    size: 10px !important;
    margin: 5px 0 0 2px;
  }
`;

export const IconsRightSchedules = styled.div`
  display: flex;
  align-items: center;

  svg {
    padding-left: 20px;
    min-height: 20px;
    width: 100%;
    padding-right: 20px;
  }
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
export const MainReservation = styled.div`
  width: 100%;
  display: flex;
  //background-color: #8ed7ec;
`;
