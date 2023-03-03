import styled from 'styled-components';

export const LoginPage = styled.div`
  height: auto;
  background-color: #f87125;
  padding-bottom: 20px;
  width: 60%;
  display: flex;
  justify-content: center;
  animation: slideDown 0.5s ease;
  transform-origin: top;

  @keyframes slideDown {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }
`

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-end;

  .fadeIn {
    animation: fadeIn 0.5s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
