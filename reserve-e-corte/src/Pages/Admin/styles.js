import styled from 'styled-components';


export const WhatsAppAdmin = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: center;

  input {
    max-height: 30px;
    padding: 10px 20px;
    border: 1px solid black;
    display: flex;
    align-self: center;
    justify-self: center;
    justify-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const AdminContainer = styled.div`
  background-color: #86d9f8;
  padding-bottom: 100px;

  h2 {
    text-align: center;
  }

  div {
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
    padding: 10px 20px;
    height: 30px;
    border-radius: 20px;
    border: 1px solid black;
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

  button {
    cursor: pointer;
    margin-top: 10px;
    
    :active {
      transform: translateY(2px);
      background-color: #ccc;
    }

  }
`
