import styled from "styled-components";

export const DropdownWrapper = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DropdownIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const DropdownOptions = styled.div`
  position: absolute;
  top: 70px;
  right: 10px;
  white-space: nowrap;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 8px;
  display: ${({open}) => (open ? "block" : "none")};
  text-align: center;
  animation: slideDown 0.5s ease;
  transform-origin: top;
  z-index: 2;
}

@keyframes slideDown {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
`;

export const Option = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #d6f8d3;
  
  &:hover {
    background-color: #08152c;
    color: white;
  }
`;
