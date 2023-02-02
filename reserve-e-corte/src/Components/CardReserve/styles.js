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


export const InputMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  position: relative;
  width: 196px;

  input {
    position: relative;
    width: 100%;
    padding: 20px 10px 10px;
    background: transparent;
    outline: none;
    box-shadow: none;
    border: none;
    color: #23242a;
    font-size: 1em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    z-index: 10;
  }

  span {
    position: absolute;
    left: 0;
    padding: 20px 10px 10px;
    font-size: 1em;
    color: #08152c;
    letter-spacing: 00.05em;
    transition: 0.5s;
    pointer-events: none;
  }

  input:valid ~ span,
  input:focus ~ span {
    color: #fdfefd;
    transform: translateX(-10px) translateY(-34px);
    font-size: 0, 75em;
  }

  i {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #fdfefd;
    border-radius: 4px;
    transition: 0.5s;
    pointer-events: none;
    z-index: 9;
  }

  input:valid ~ i,
  input:focus ~ i {
    height: 44px;
  }
`
export const ButtonSend = styled.button`
  

`
