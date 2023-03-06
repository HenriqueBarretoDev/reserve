import styled from 'styled-components';

export const TopDates = styled.div``;

export const BottomDates = styled.div``;

export const ContainerSchedules = styled.div`
  background-color: #76c5f0;

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

  img {
    height: 40px;
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

  span::first-letter {
    text-transform: uppercase;
  }
`;

export const IconsRightSchedules = styled.div`
  background-color: #f0eeed;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  margin: 0;
  align-items: center;
  min-width: 100px;

  svg {
    padding-left: 20px;
    min-height: 20px;
    width: 100%;
    padding-right: 20px;
  }

  ul {
    position: relative;
    top: calc(100% + 0.5rem);
    right: 0;
    width: 50%;
    background-color: white;
    border: 1px solid black;
    padding: 0.5rem;
    margin-top: 0;
    list-style: none;
  }

  li {
    cursor: pointer;
    padding: 0.5rem;
  }

  li:hover {
    background-color: #ccc;
  }

  &div:nth-child(1) {
    background-color: #f87125;
  }
`;



