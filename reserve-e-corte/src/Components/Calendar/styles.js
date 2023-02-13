import styled from 'styled-components';

export const CalendarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  align-items: center;
  align-self: flex-end;
  height: 100%;


  .react-calendar__navigation__label {
    pointer-events: none;
  }

  .react-calendar__month-view__days__day {
    height: 60px;
    width: 50px;
  }

  .react-calendar__month-view__weekdays__weekday {
    background-color: #4b83da;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
  }


  input {
    background-color: rebeccapurple;
    color: red;
  }
}`;
export const MainCalendar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 5px 5px 5px;
  background-color: black;

  .react-calendar .react-calendar__tile--active {
    background-color: red;
  }

  .today {
    background-color: darkred;
  }

  .custom-input {
    background-color: #f2f2f2;
    border: none;
    color: black;
    padding: 12px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    background-color: yellowgreen;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 150px;
  }
`

// export const TimeSelect = styled.select`
// {
//   height: 40px;
//   margin-right: 8px;
//   padding: 8px 16px;
//   background-color: white;
//   border-radius: 4px;
//   font-size: 16px;
//   box-shadow: 0 0 10px;
//   border: none;
//   outline: red;
// }
// `
//
// export const ReserveButton = styled.button`
//   height: 50px;
//   padding: 8px 16px;
//   background-color: rgb(63, 255, 0);
//   color: black;
//   border: none;
//   border-radius: 14px;
//   cursor: pointer;
//   font-size: 16px;
// `;
//
// export const ReservationList = styled.ul`
//   margin-top: 16px;
//   padding: 20px;
//   background-color: #f1f1f1;
//   border-radius: 8px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   background-color: pink;
// `;
//
// export const ReservationItem = styled.li`
//   margin-bottom: 8px;
//   font-size: 16px;
//   background-color: blue;
// `;

// export const MessageCalendar = styled.li`
//   background-color: orchid;
// `;