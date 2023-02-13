import styled from 'styled-components';


export const WhatsAppAdmin = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: center;

  input {
    width: 80%;
  }
`;

export const AdminContainer = styled.div`
  background-color: #86d9f8;
  padding-bottom: 100px;

  h2 {
    text-align: center;
  }

  div{
    display: flex;
    flex-direction: column;
  }
  button {
    display: flex;
    align-self: center;
    justify-self: center;
    justify-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 80%;
  }
`

export const AdminWorkingDays = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
  }

  input {
    border: none;
    border-bottom: 2px solid black;
    width: 20px;
    height: 20px;
  }

  label {
    font-size: 20px;
    margin-bottom: 5px;
  }

  h4 {
    text-align: center;
  }
  span {
    padding-left: 20px;
  }
`

export const DefineWorkingHours = styled.div`

  h4 {
    text-align: center
  }

  p {
    padding-left: 20px;
  }
`
