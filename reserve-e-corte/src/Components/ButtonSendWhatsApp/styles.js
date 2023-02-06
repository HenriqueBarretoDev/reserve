import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: #f87125;
  color: #08152c;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #86D9F8;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;

  :hover div {
    width: calc(100% - 0.6em);
  }

  div {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #86D9F8;
    right: 0.3em;
    transition: all 0.3s;

    :hover {
      width: calc(100% - 0.6em);
    }

    :active {
      transform: scale(0.95);
    }
  }

  svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #08152c;

    :hover {
      transform: translateX(0.1em);
    }
  }

`;

