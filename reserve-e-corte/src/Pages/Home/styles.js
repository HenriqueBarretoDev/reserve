import styled from "styled-components";


export const TopDates = styled.div`
`;

export const BottomDates = styled.div`
`;

export const ContainerSchedules = styled.div`
  header {
    background-color: #f0eeed;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    margin: 0;
  }
  h1 {
    color: #8d699c;
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
  }
  h1::first-letter {
    text-transform: uppercase
  }
  svg {
    min-height: 30px;
    width: 100%;
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
  max-width: 15%;
  
  p{
    padding: 10px 0;
    background-color: #08152c;
    height: 25px;
    color: #fefefe;
  }
`;