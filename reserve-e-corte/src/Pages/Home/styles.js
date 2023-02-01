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



