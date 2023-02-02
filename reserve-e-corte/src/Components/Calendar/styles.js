import styled from 'styled-components';

export const CalendarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  span {
    background-color: red;
    color: blue;

  }
}
`

export const MainCalendar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: wheat;


  form {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
  }`

export const TimeSelect = styled.select`
  margin-right: 8px;
  padding: 8px 16px;
  background-color: white;
  border-radius: 4px;
  font-size: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;
`;

export const ReserveButton = styled.button`
  padding: 8px 16px;
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ReservationList = styled.ul`
  margin-top: 16px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ReservationItem = styled.li`
  margin-bottom: 8px;
  font-size: 16px;
`;
